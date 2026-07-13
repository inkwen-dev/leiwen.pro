'use client';

import { useTranslations } from 'next-intl';
import { friendLinks } from '@/lib/data/friend-links';

export default function FriendLinksBand() {
  const t = useTranslations('friendLinks');

  return (
    <section
      aria-labelledby="friend-links-heading"
      className="border-t border-border bg-background"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <h2
          id="friend-links-heading"
          className="text-sm font-semibold text-foreground mb-3"
        >
          {t('title')}
        </h2>
        <ul className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm">
          {friendLinks.map((link, index) => {
            const isSelf = index === 0;
            return (
              <li key={link.id} className="flex items-center gap-3">
                {index > 0 ? (
                  <span aria-hidden="true" className="text-muted-foreground/60">
                    ·
                  </span>
                ) : null}
                <a
                  href={isSelf ? '/' : link.url}
                  {...(isSelf
                    ? {}
                    : { target: '_blank', rel: 'noopener noreferrer' })}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
