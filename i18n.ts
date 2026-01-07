import { getRequestConfig } from 'next-intl/server';
import { IntlErrorCode } from 'next-intl';
import { routing } from './i18n/routing';

// Export types and config for use in other files
export const locales = routing.locales;
export const defaultLocale = routing.defaultLocale;
export type Locale = (typeof locales)[number];

export default getRequestConfig(async ({ requestLocale }) => {
  // Get locale from request
  let locale = await requestLocale;

  // Ensure locale is valid, fallback to default if not
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
    onError(error) {
      if (error.code === IntlErrorCode.MISSING_MESSAGE) {
        // Missing translations are expected during development
        console.error('Missing translation:', error);
      } else {
        // Other errors indicate a bug in the app
        console.error('Translation error:', error);
      }
    },
    getMessageFallback({ namespace, key, error }) {
      const path = [namespace, key].filter((part) => part != null).join('.');
      
      if (error.code === IntlErrorCode.MISSING_MESSAGE) {
        return `[${path}]`;
      }
      
      return `[Translation Error: ${path}]`;
    }
  };
});

