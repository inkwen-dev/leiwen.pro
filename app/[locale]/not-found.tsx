import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Home } from 'lucide-react';

export default function NotFound() {
  const t = useTranslations('NotFound');

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-foreground mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-foreground mb-2">
          {t('title')}
        </h2>
        <p className="text-muted-foreground mb-8">
          {t('description')}
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          <Home className="w-4 h-4" />
          {t('backHome')}
        </Link>
      </div>
    </div>
  );
}

