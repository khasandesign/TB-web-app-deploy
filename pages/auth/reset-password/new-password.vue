<template>
  <div>
    <h2
      class="h4 text-center md:text-start text-label-primary-dark mb-3 font-bold"
    >
      {{ $t('resetPassword.newPassword') }}
    </h2>
    <div class="text-center md:text-start mx-auto md:ml-0 max-w-[300px] mb-8">
      <p class="par-2 text-label-secondary-dark font-normal">
        {{ $t('resetPassword.changePasswordDesc') }}
      </p>
    </div>
    <BaseForm ref="form" @submit="handleSubmit">
      <BasePasswordInput
        v-model="password"
        v-focus
        name="password"
        rules="required"
        :placeholder="$t('resetPassword.newPassword')"
      />
      <BasePasswordInput
        v-model="password"
        name="passwordConfirm"
        rules="required|password:@password"
        class="mt-3"
        :placeholder="$t('resetPassword.repeatPassword')"
      />

      <BaseButton
        :loading="loading"
        type="submit"
        size="large"
        class="w-full flex justify-center mt-4 mb-6"
      >
        {{ $t('register.continue') }}
      </BaseButton>
    </BaseForm>
  </div>
</template>

<script>
import { resetPasswordRepository } from '~/api/auth'

export default {
  name: 'ResetPasswordNewPassword',
  data() {
    return {
      loading: false,
      password: '',
      passwordConfirm: '',
    }
  },
  head() {
    return {
      title: this.$t('resetPassword.newPassword'),
    }
  },
  methods: {
    async handleSubmit() {
      try {
        this.loading = true
        const resetPasswordRepo = resetPasswordRepository(this.$axios)
        await resetPasswordRepo.changePassword({
          password: this.password,
          passwordConfirmation: this.passwordConfirm,
          code: this.$store.state.resetPassword.code,
        })
        this.$toast.info(this.$t('resetPassword.success'), {
          className: '!bg-primary',
          duration: 4000,
        })
        await this.$router.push(this.localePath({ name: 'auth-sign-in' }))
      } catch (e) {
      } finally {
        this.loading = false
      }
    },
  },
}
</script>
