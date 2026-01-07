'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { locales, type Locale } from '@/i18n';
import { Globe, ChevronDown, Loader2 } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const languageNames: Record<Locale, string> = {
  en: 'English',
  zh: '中文',
  es: 'Español',
};

export default function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const switchLocale = (newLocale: Locale) => {
    if (newLocale === locale || isLoading) return;
    
    setIsLoading(true);
    setIsOpen(false);
    
    // Use next-intl's router to switch locale
    // This automatically handles cookie setting and path prefix
    router.replace(pathname, { locale: newLocale });
    
    // Reset loading state after navigation
    // Note: In practice, the page will reload, so this is mainly for visual feedback
    setTimeout(() => setIsLoading(false), 500);
  };

  // Handle keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        buttonRef.current?.focus();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setFocusedIndex((prev) => {
          const next = prev < locales.length - 1 ? prev + 1 : 0;
          itemRefs.current[next]?.focus();
          return next;
        });
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setFocusedIndex((prev) => {
          const next = prev > 0 ? prev - 1 : locales.length - 1;
          itemRefs.current[next]?.focus();
          return next;
        });
      } else if (e.key === 'Enter' || e.key === ' ') {
        if (focusedIndex >= 0 && focusedIndex < locales.length) {
          e.preventDefault();
          switchLocale(locales[focusedIndex]);
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, focusedIndex, locale, pathname, router]);

  // Close dropdown when clicking outside
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Reset focus index when dropdown opens/closes
  useEffect(() => {
    if (isOpen) {
      setFocusedIndex(-1);
    }
  }, [isOpen]);

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border hover:border-primary/50 transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        aria-label="Switch language"
        aria-expanded={isOpen}
        aria-haspopup="true"
        disabled={isLoading}
      >
        {isLoading ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          <Globe className="w-4 h-4" />
        )}
        <span>{languageNames[locale]}</span>
        <ChevronDown 
          className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          <div
            ref={dropdownRef}
            className="absolute right-0 top-full mt-2 w-32 bg-card border border-border rounded-lg shadow-lg z-20"
            role="menu"
            aria-orientation="vertical"
          >
            {locales.map((loc, index) => (
              <button
                key={loc}
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
                onClick={() => switchLocale(loc)}
                onMouseEnter={() => setFocusedIndex(index)}
                className={`w-full text-left px-4 py-2 text-sm hover:bg-accent transition-colors focus:outline-none focus:bg-accent ${
                  locale === loc ? 'bg-accent/50 font-semibold' : ''
                }`}
                role="menuitem"
                aria-label={`Switch to ${languageNames[loc]}`}
                aria-current={locale === loc ? 'true' : 'false'}
              >
                {languageNames[loc]}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

