'use client';

import { useTranslations } from 'next-intl';
import { Mail } from 'lucide-react';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
          <span>{t('copyright')}</span>
          <span className="hidden sm:inline">·</span>
          <a
            href={`mailto:${t('email')}`}
            className="flex items-center gap-1 hover:text-foreground transition-colors"
            aria-label={t('emailLabel')}
          >
            <Mail className="w-3 h-3" />
            <span>{t('email')}</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

