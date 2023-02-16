<template>
  <BaseBreadcrumb :items="items" />
</template>

<script>
export default {
  name: 'ResetPasswordBreadcrumbs',
  computed: {
    items() {
      const lastItems = {
        'auth-reset-password-verify': {
          title: this.$t('resetPassword.verification'),
          to: this.localePath({ name: 'auth-reset-password-verify' }),
        },
        'auth-reset-password-new-password': {
          title: this.$t('resetPassword.newPassword'),
          to: this.localePath({ name: 'auth-reset-password-new-password' }),
        },
      }
      const result = [
        {
          to: this.localePath({ name: 'auth-sign-in' }),
          title: this.$t('signIn'),
        },
        {
          to: this.localePath({ name: 'auth-reset-password' }),
          title: this.$t('resetPassword.title'),
        },
      ]

      const currentRouteName = this.getRouteBaseName()
      if (Object.keys(lastItems).includes(currentRouteName)) {
        result.push(lastItems[currentRouteName])
      }
      return result
    },
  },
}
</script>
