<template>
  <div>
    <h2
      class="h4 text-center md:text-start text-label-primary-dark font-bold mb-3"
    >
      {{ $t('signIn') }}
    </h2>
    <div class="text-center md:text-start">
      <p class="par-2 text-label-secondary-dark font-normal inline">
        {{ $t('signInText') }}
      </p>
      <NuxtLink
        :to="localePath('auth-sign-up')"
        class="inline-block text-label-primary-dark mb-8"
      >
        {{ $t('toSignUp') }}
      </NuxtLink>
    </div>
    <BaseForm ref="form" class="space-y-3" @submit="handleLogin">
      <BaseInputTel
        v-model="login.phoneNumber"
        v-focus
        size="large"
        name="phoneNumber"
        rules="required|tel"
      />
      <BasePasswordInput
        v-model="login.password"
        rules="required"
        name="password"
        :placeholder="$t('signInPasswordPalceholder')"
      />
      <section class="mt-3 flex justify-end">
        <NuxtLink
          :to="localePath({ name: 'auth-reset-password' })"
          class="text-label-primary-dark font-normal underline underline-offset-2"
        >
          {{ $t('forgotPassword') }}
        </NuxtLink>
      </section>

      <section class="mt-3">
        <BaseCheckbox
          id="remember"
          v-model="login.remember"
          :label="$t('rememberMe')"
          label-position="right"
        />
      </section>

      <BaseButton
        type="submit"
        size="large"
        class="w-full flex justify-center mt-4"
        :loading="loading"
      >
        {{ $t('enter') }}
      </BaseButton>
    </BaseForm>
    <div class="flex items-center justify-center mt-6">
      <span class="w-full h-px bg-white/[.08]"></span>
      <p class="text-xs leading-4 uppercase text-gray-8-dark font-medium mx-2">
        {{ $t('or') }}
      </p>
      <span class="w-full h-px bg-white/[.08]"></span>
    </div>
    <div class="mt-6">
      <BaseButton
        size="large"
        class="bg-white text-black/80 w-full flex justify-center items-center mb-1.5"
      >
        <img src="@/assets/icons/Google.svg" alt="google" />
        {{ $t('signInGoogle') }}
      </BaseButton>
      <BaseButton
        size="large"
        class="bg-[#2E4F8B] w-full flex justify-center items-center mt-1.5"
      >
        <img src="@/assets/icons/Facebook_white.svg" alt="facebook" />
        {{ $t('signInFacebook') }}
      </BaseButton>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignInPage',
  layout: 'authLayout',
  data() {
    return {
      loading: false,
      login: {
        phoneNumber: null,
        password: null,
        remember: false,
      },
    }
  },
  head() {
    return {
      title: this.$t('signIn'),
    }
  },
  methods: {
    async handleLogin() {
      try {
        this.loading = true
        await this.$auth.loginWith('local', {
          data: {
            ...this.login,
            phoneNumber: this.login.phoneNumber.replace('+', ''),
          },
        })
        await this.$router.push(this.localePath({ name: 'index' }))
      } catch (error) {
        if (error?.response?.data?.detail) {
          this.$refs.form.$refs.observer.setErrors({
            password: error?.response?.data?.detail,
          })
        }
      } finally {
        this.loading = false
      }
    },
  },
}
</script>
