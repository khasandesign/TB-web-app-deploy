

export const Constants = {
  COMPONENT_OPTIONS_KEY: "nuxtI18n",
  STRATEGIES: {"PREFIX":"prefix","PREFIX_EXCEPT_DEFAULT":"prefix_except_default","PREFIX_AND_DEFAULT":"prefix_and_default","NO_PREFIX":"no_prefix"},
  REDIRECT_ON_OPTIONS: {"ALL":"all","ROOT":"root","NO_PREFIX":"no prefix"},
}
export const nuxtOptions = {
  isUniversalMode: true,
  trailingSlash: undefined,
}
export const options = {
  vueI18n: {},
  vueI18nLoader: false,
  locales: [{"code":"uz","file":"uz.js"},{"code":"ru","file":"ru.js"},{"code":"en","file":"en.js"}],
  defaultLocale: "uz",
  defaultDirection: "ltr",
  routesNameSeparator: "___",
  defaultLocaleRouteNameSuffix: "default",
  sortRoutes: true,
  strategy: "prefix_except_default",
  lazy: true,
  langDir: "/Users/uralrashidov/Documents/my_projects/TopBreynsCompnay/TB-web-app/lang",
  rootRedirect: null,
  detectBrowserLanguage: {"alwaysRedirect":false,"cookieCrossOrigin":false,"cookieDomain":null,"cookieKey":"i18n_redirected","cookieSecure":false,"fallbackLocale":"","redirectOn":"root","useCookie":true},
  differentDomains: false,
  baseUrl: "",
  vuex: {"moduleName":"i18n","syncRouteParams":true},
  parsePages: true,
  pages: {},
  skipSettingLocaleOnNavigate: false,
  onBeforeLanguageSwitch: () => {},
  onLanguageSwitched: () => null,
  normalizedLocales: [{"code":"uz","file":"uz.js"},{"code":"ru","file":"ru.js"},{"code":"en","file":"en.js"}],
  localeCodes: ["uz","ru","en"],
  additionalMessages: [],
}

export const localeMessages = {
  'uz.js': () => import('../../lang/uz.js' /* webpackChunkName: "lang-uz.js" */),
  'ru.js': () => import('../../lang/ru.js' /* webpackChunkName: "lang-ru.js" */),
  'en.js': () => import('../../lang/en.js' /* webpackChunkName: "lang-en.js" */),
}
