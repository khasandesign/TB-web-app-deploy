import { themes } from '@storybook/theming'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  debug: true,
  head: {
    titleTemplate: 'TopBreyns -  %s',
    htmlAttrs: {
      lang: 'en',
      class: 'dark',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: true,
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap',
        crossorigin: true,
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Yeseva+One&display=swap',
        crossorigin: true,
      },
    ],
  },

  loading: {
    color: '#F8A404',
    height: '3px',
    failedColor: '#E43E34',
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/v-mask', ssr: false },
    { src: '@/plugins/directives' },
    { src: '@/plugins/vue-slick-carousel' },
    { src: '@/plugins/vee-validate.js' },
    { src: '~/plugins/vue-confetti.js', mode: 'client' },
  ],

  serverMiddleware: ['~/mocks/index.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/i18n',
    // https://auth.nuxtjs.org
    '@nuxtjs/auth-next',
    '@nuxtjs/dayjs',
    '@nuxtjs/toast',
  ],

  toast: {
    position: 'top-center',
    duration: 2000,
  },

  tailwindcss: {
    cssPath: '~/assets/css/global.css',
    configPath: 'tailwind.config.js',
    exposeConfig: true,
    config: {},
    injectPosition: 0,
    viewer: true,
  },
  // nuxt/auth settings
  auth: {
    redirect: {
      login: '/auth/sign-in',
      logout: '/auth/sign-in',
      home: '/',
      callback: '/auth/sign-in',
    },
    strategies: {
      facebook: {
        endpoints: {
          userInfo:
            'https://graph.facebook.com/v6.0/me?fields=id,name,picture{url}',
        },
        clientId: '...',
        scope: ['public_profile', 'email'],
      },

      google: {
        clientId: '...',
      },
      local: {
        token: {
          property: 'accessToken',
          global: true,
        },
        user: {
          property: false,
        },
        endpoints: {
          login: { url: '/login', method: 'post' },
          logout: { url: '/logout', method: 'post' },
          user: { url: '/user', method: 'get' },
        },
      },
    },
  },
  // lang Nuxt/i18n settings
  i18n: {
    locales: [
      {
        code: 'uz',
        file: 'uz.js',
      },
      {
        code: 'ru',
        file: 'ru.js',
      },
      {
        code: 'en',
        file: 'en.js',
      },
    ],
    lazy: true,
    langDir: 'lang/',
    strategy: 'prefix_except_default',
    defaultLocale: 'uz',
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL:
      process.env.NODE_ENV === 'production'
        ? 'https://test.topbreyns.uz/api'
        : 'http://localhost:3000/api',
  },

  dayjs: {
    locales: ['en', 'uz-latn', 'ru'],
    defaultLocale: 'uz-latn',
    defaultTimeZone: 'Asia/Tashkent',
    plugins: ['utc', 'timezone', 'relativeTime', 'isSameOrBefore'],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, { loaders }) {
      loaders.scss.additionalData = '@use "sass:math";'
    },
    transpile: ['vee-validate'],
    postcss: {
      plugins: {
        autoprefixer: {},
      },
    },
  },
  devServerHandlers: [],

  storybook: {
    addons: ['storybook-dark-mode'],
    stories: [],
    webpackFinal(config) {
      return config
    },
    parameters: {
      darkMode: {
        darkClass: 'dark',
        classTarget: 'html',
        dark: { ...themes.dark, appBg: 'black' },
        current: 'dark',
      },
    },
  },
}
