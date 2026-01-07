import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'zh', 'es'],
  defaultLocale: 'en',
  // 默认语言不显示前缀，其他语言显示前缀
  localePrefix: 'as-needed',
  // 禁用自动浏览器语言检测，使用默认语言或用户保存的语言
  localeDetection: false
});

