import Middleware from './middleware'
import { Auth, authMiddleware, ExpiredAuthSessionError } from '~auth/runtime'

// Active schemes
import { Oauth2Scheme } from '~auth/runtime'
import { LocalScheme } from '~auth/runtime'

Middleware.auth = authMiddleware

export default function (ctx, inject) {
  // Options
  const options = {
  "resetOnError": false,
  "ignoreExceptions": false,
  "scopeKey": "scope",
  "rewriteRedirects": true,
  "fullPathRedirect": false,
  "watchLoggedIn": true,
  "redirect": {
    "login": "/auth/sign-in",
    "logout": "/auth/sign-in",
    "home": "/",
    "callback": "/auth/sign-in"
  },
  "vuex": {
    "namespace": "auth"
  },
  "cookie": {
    "prefix": "auth.",
    "options": {
      "path": "/"
    }
  },
  "localStorage": {
    "prefix": "auth."
  },
  "defaultStrategy": "facebook"
}

  // Create a new Auth instance
  const $auth = new Auth(ctx, options)

  // Register strategies
  // facebook
  $auth.registerStrategy('facebook', new Oauth2Scheme($auth, {
  "endpoints": {
    "authorization": "https://facebook.com/v2.12/dialog/oauth",
    "userInfo": "https://graph.facebook.com/v6.0/me?fields=id,name,picture{url}"
  },
  "clientId": "...",
  "scope": [
    "public_profile",
    "email",
    "public_profile",
    "email"
  ],
  "name": "facebook"
}))

  // google
  $auth.registerStrategy('google', new Oauth2Scheme($auth, {
  "clientId": "...",
  "name": "google",
  "endpoints": {
    "authorization": "https://accounts.google.com/o/oauth2/auth",
    "userInfo": "https://www.googleapis.com/oauth2/v3/userinfo"
  },
  "scope": [
    "openid",
    "profile",
    "email"
  ]
}))

  // local
  $auth.registerStrategy('local', new LocalScheme($auth, {
  "token": {
    "property": "accessToken",
    "global": true
  },
  "user": {
    "property": false
  },
  "endpoints": {
    "login": {
      "url": "/login",
      "method": "post"
    },
    "logout": {
      "url": "/logout",
      "method": "post"
    },
    "user": {
      "url": "/user",
      "method": "get"
    }
  },
  "name": "local"
}))

  // Inject it to nuxt context as $auth
  inject('auth', $auth)
  ctx.$auth = $auth

  // Initialize auth
  return $auth.init().catch(error => {
    if (process.client) {
      // Don't console log expired auth session errors. This error is common, and expected to happen.
      // The error happens whenever the user does an ssr request (reload/initial navigation) with an expired refresh
      // token. We don't want to log this as an error.
      if (error instanceof ExpiredAuthSessionError) {
        return
      }

      console.error('[ERROR] [AUTH]', error)
    }
  })
}
