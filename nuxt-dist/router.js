import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _13142a8d = () => interopDefault(import('../pages/articles/index.vue' /* webpackChunkName: "pages/articles/index" */))
const _2ee42648 = () => interopDefault(import('../pages/collaboration.vue' /* webpackChunkName: "pages/collaboration" */))
const _6b4cf2c0 = () => interopDefault(import('../pages/contacts.vue' /* webpackChunkName: "pages/contacts" */))
const _0e4cf24a = () => interopDefault(import('../pages/courseFinish.vue' /* webpackChunkName: "pages/courseFinish" */))
const _75193d56 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _54ffc059 = () => interopDefault(import('../pages/faq.vue' /* webpackChunkName: "pages/faq" */))
const _7e9d024b = () => interopDefault(import('../pages/privacy.vue' /* webpackChunkName: "pages/privacy" */))
const _2f986fec = () => interopDefault(import('../pages/profile.vue' /* webpackChunkName: "pages/profile" */))
const _d690ba96 = () => interopDefault(import('../pages/search.vue' /* webpackChunkName: "pages/search" */))
const _6f711f8a = () => interopDefault(import('../pages/terms.vue' /* webpackChunkName: "pages/terms" */))
const _57f5d442 = () => interopDefault(import('../pages/test.vue' /* webpackChunkName: "pages/test" */))
const _6fe1f2e3 = () => interopDefault(import('../pages/auth/reset-password.vue' /* webpackChunkName: "pages/auth/reset-password" */))
const _39d0f9b4 = () => interopDefault(import('../pages/auth/reset-password/index.vue' /* webpackChunkName: "pages/auth/reset-password/index" */))
const _a67d4af8 = () => interopDefault(import('../pages/auth/reset-password/new-password.vue' /* webpackChunkName: "pages/auth/reset-password/new-password" */))
const _185e0d55 = () => interopDefault(import('../pages/auth/reset-password/verify.vue' /* webpackChunkName: "pages/auth/reset-password/verify" */))
const _040037ca = () => interopDefault(import('../pages/auth/sign-in.vue' /* webpackChunkName: "pages/auth/sign-in" */))
const _7db6d054 = () => interopDefault(import('../pages/auth/sign-up/index.vue' /* webpackChunkName: "pages/auth/sign-up/index" */))
const _53ddcd01 = () => interopDefault(import('../pages/auth/sign-up/finish.vue' /* webpackChunkName: "pages/auth/sign-up/finish" */))
const _5caf3432 = () => interopDefault(import('../pages/auth/sign-up/verify.vue' /* webpackChunkName: "pages/auth/sign-up/verify" */))
const _42d56c35 = () => interopDefault(import('../pages/articles/_id.vue' /* webpackChunkName: "pages/articles/_id" */))
const _350f7fee = () => interopDefault(import('../pages/certificates/_certificateId.vue' /* webpackChunkName: "pages/certificates/_certificateId" */))
const _5850a624 = () => interopDefault(import('../pages/courses/_courseId/index.vue' /* webpackChunkName: "pages/courses/_courseId/index" */))
const _39ccbe2e = () => interopDefault(import('../pages/courses/_courseId/certificate.vue' /* webpackChunkName: "pages/courses/_courseId/certificate" */))
const _7b706c62 = () => interopDefault(import('../pages/courses/_courseId/purchase/index.vue' /* webpackChunkName: "pages/courses/_courseId/purchase/index" */))
const _72dbab50 = () => interopDefault(import('../pages/courses/_courseId/lessons/_lessonId.vue' /* webpackChunkName: "pages/courses/_courseId/lessons/_lessonId" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/articles",
    component: _13142a8d,
    name: "articles___uz"
  }, {
    path: "/collaboration",
    component: _2ee42648,
    name: "collaboration___uz"
  }, {
    path: "/contacts",
    component: _6b4cf2c0,
    name: "contacts___uz"
  }, {
    path: "/courseFinish",
    component: _0e4cf24a,
    name: "courseFinish___uz"
  }, {
    path: "/en",
    component: _75193d56,
    name: "index___en"
  }, {
    path: "/faq",
    component: _54ffc059,
    name: "faq___uz"
  }, {
    path: "/privacy",
    component: _7e9d024b,
    name: "privacy___uz"
  }, {
    path: "/profile",
    component: _2f986fec,
    name: "profile___uz"
  }, {
    path: "/ru",
    component: _75193d56,
    name: "index___ru"
  }, {
    path: "/search",
    component: _d690ba96,
    name: "search___uz"
  }, {
    path: "/terms",
    component: _6f711f8a,
    name: "terms___uz"
  }, {
    path: "/test",
    component: _57f5d442,
    name: "test___uz"
  }, {
    path: "/auth/reset-password",
    component: _6fe1f2e3,
    children: [{
      path: "",
      component: _39d0f9b4,
      name: "auth-reset-password___uz"
    }, {
      path: "new-password",
      component: _a67d4af8,
      name: "auth-reset-password-new-password___uz"
    }, {
      path: "verify",
      component: _185e0d55,
      name: "auth-reset-password-verify___uz"
    }]
  }, {
    path: "/auth/sign-in",
    component: _040037ca,
    name: "auth-sign-in___uz"
  }, {
    path: "/auth/sign-up",
    component: _7db6d054,
    name: "auth-sign-up___uz"
  }, {
    path: "/en/articles",
    component: _13142a8d,
    name: "articles___en"
  }, {
    path: "/en/collaboration",
    component: _2ee42648,
    name: "collaboration___en"
  }, {
    path: "/en/contacts",
    component: _6b4cf2c0,
    name: "contacts___en"
  }, {
    path: "/en/courseFinish",
    component: _0e4cf24a,
    name: "courseFinish___en"
  }, {
    path: "/en/faq",
    component: _54ffc059,
    name: "faq___en"
  }, {
    path: "/en/privacy",
    component: _7e9d024b,
    name: "privacy___en"
  }, {
    path: "/en/profile",
    component: _2f986fec,
    name: "profile___en"
  }, {
    path: "/en/search",
    component: _d690ba96,
    name: "search___en"
  }, {
    path: "/en/terms",
    component: _6f711f8a,
    name: "terms___en"
  }, {
    path: "/en/test",
    component: _57f5d442,
    name: "test___en"
  }, {
    path: "/ru/articles",
    component: _13142a8d,
    name: "articles___ru"
  }, {
    path: "/ru/collaboration",
    component: _2ee42648,
    name: "collaboration___ru"
  }, {
    path: "/ru/contacts",
    component: _6b4cf2c0,
    name: "contacts___ru"
  }, {
    path: "/ru/courseFinish",
    component: _0e4cf24a,
    name: "courseFinish___ru"
  }, {
    path: "/ru/faq",
    component: _54ffc059,
    name: "faq___ru"
  }, {
    path: "/ru/privacy",
    component: _7e9d024b,
    name: "privacy___ru"
  }, {
    path: "/ru/profile",
    component: _2f986fec,
    name: "profile___ru"
  }, {
    path: "/ru/search",
    component: _d690ba96,
    name: "search___ru"
  }, {
    path: "/ru/terms",
    component: _6f711f8a,
    name: "terms___ru"
  }, {
    path: "/ru/test",
    component: _57f5d442,
    name: "test___ru"
  }, {
    path: "/auth/sign-up/finish",
    component: _53ddcd01,
    name: "auth-sign-up-finish___uz"
  }, {
    path: "/auth/sign-up/verify",
    component: _5caf3432,
    name: "auth-sign-up-verify___uz"
  }, {
    path: "/en/auth/reset-password",
    component: _6fe1f2e3,
    children: [{
      path: "",
      component: _39d0f9b4,
      name: "auth-reset-password___en"
    }, {
      path: "new-password",
      component: _a67d4af8,
      name: "auth-reset-password-new-password___en"
    }, {
      path: "verify",
      component: _185e0d55,
      name: "auth-reset-password-verify___en"
    }]
  }, {
    path: "/en/auth/sign-in",
    component: _040037ca,
    name: "auth-sign-in___en"
  }, {
    path: "/en/auth/sign-up",
    component: _7db6d054,
    name: "auth-sign-up___en"
  }, {
    path: "/ru/auth/reset-password",
    component: _6fe1f2e3,
    children: [{
      path: "",
      component: _39d0f9b4,
      name: "auth-reset-password___ru"
    }, {
      path: "new-password",
      component: _a67d4af8,
      name: "auth-reset-password-new-password___ru"
    }, {
      path: "verify",
      component: _185e0d55,
      name: "auth-reset-password-verify___ru"
    }]
  }, {
    path: "/ru/auth/sign-in",
    component: _040037ca,
    name: "auth-sign-in___ru"
  }, {
    path: "/ru/auth/sign-up",
    component: _7db6d054,
    name: "auth-sign-up___ru"
  }, {
    path: "/en/auth/sign-up/finish",
    component: _53ddcd01,
    name: "auth-sign-up-finish___en"
  }, {
    path: "/en/auth/sign-up/verify",
    component: _5caf3432,
    name: "auth-sign-up-verify___en"
  }, {
    path: "/ru/auth/sign-up/finish",
    component: _53ddcd01,
    name: "auth-sign-up-finish___ru"
  }, {
    path: "/ru/auth/sign-up/verify",
    component: _5caf3432,
    name: "auth-sign-up-verify___ru"
  }, {
    path: "/en/articles/:id",
    component: _42d56c35,
    name: "articles-id___en"
  }, {
    path: "/en/certificates/:certificateId?",
    component: _350f7fee,
    name: "certificates-certificateId___en"
  }, {
    path: "/en/courses/:courseId",
    component: _5850a624,
    name: "courses-courseId___en"
  }, {
    path: "/ru/articles/:id",
    component: _42d56c35,
    name: "articles-id___ru"
  }, {
    path: "/ru/certificates/:certificateId?",
    component: _350f7fee,
    name: "certificates-certificateId___ru"
  }, {
    path: "/ru/courses/:courseId",
    component: _5850a624,
    name: "courses-courseId___ru"
  }, {
    path: "/en/courses/:courseId?/certificate",
    component: _39ccbe2e,
    name: "courses-courseId-certificate___en"
  }, {
    path: "/en/courses/:courseId?/purchase",
    component: _7b706c62,
    name: "courses-courseId-purchase___en"
  }, {
    path: "/ru/courses/:courseId?/certificate",
    component: _39ccbe2e,
    name: "courses-courseId-certificate___ru"
  }, {
    path: "/ru/courses/:courseId?/purchase",
    component: _7b706c62,
    name: "courses-courseId-purchase___ru"
  }, {
    path: "/en/courses/:courseId?/lessons/:lessonId?",
    component: _72dbab50,
    name: "courses-courseId-lessons-lessonId___en"
  }, {
    path: "/ru/courses/:courseId?/lessons/:lessonId?",
    component: _72dbab50,
    name: "courses-courseId-lessons-lessonId___ru"
  }, {
    path: "/articles/:id",
    component: _42d56c35,
    name: "articles-id___uz"
  }, {
    path: "/certificates/:certificateId?",
    component: _350f7fee,
    name: "certificates-certificateId___uz"
  }, {
    path: "/courses/:courseId",
    component: _5850a624,
    name: "courses-courseId___uz"
  }, {
    path: "/courses/:courseId?/certificate",
    component: _39ccbe2e,
    name: "courses-courseId-certificate___uz"
  }, {
    path: "/courses/:courseId?/purchase",
    component: _7b706c62,
    name: "courses-courseId-purchase___uz"
  }, {
    path: "/courses/:courseId?/lessons/:lessonId?",
    component: _72dbab50,
    name: "courses-courseId-lessons-lessonId___uz"
  }, {
    path: "/",
    component: _75193d56,
    name: "index___uz"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
