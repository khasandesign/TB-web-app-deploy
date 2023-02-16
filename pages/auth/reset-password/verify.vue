<template>
  <div>
    <h2
      class="h4 text-center md:text-start text-label-primary-dark font-bold mb-3"
    >
      {{ $t('resetPassword.verification') }}
    </h2>
    <div class="text-center md:text-start mx-auto md:ml-0 max-w-[300px] mb-8">
      <p class="par-2 text-label-secondary-dark font-normal">
        {{ $t('resetPassword.description') }}
      </p>
    </div>
    <BaseForm ref="form" @submit="handleSubmit">
      <BaseInput
        v-model.number="code"
        v-focus
        name="verificationCode"
        rules="required|digits:5"
        type="text"
        :placeholder="$t('validations.fields.verificationCode')"
        class="mb-3 appearance-none hover:appearance-none focus:appearance-none"
        mask="#####"
      />

      <BaseButton
        :loading="loading"
        type="submit"
        size="large"
        class="w-full flex justify-center mt-4 mb-6"
      >
        {{ $t('register.continue') }}
      </BaseButton>
      <AuthCodeResend
        v-if="phoneNumber"
        ref="resend"
        :phone-number="phoneNumber"
        :loading="resendLoading"
        @resend="resendCode"
      />
    </BaseForm>
  </div>
</template>

<script>
import { resetPasswordRepository } from '~/api/auth'

export default {
  name: 'ResetPasswordVerification',
  data() {
    return {
      code: null,
      loading: false,
      resendLoading: false,
    }
  },
  head() {
    return {
      title: this.$t('resetPassword.verification'),
    }
  },
  computed: {
    phoneNumber() {
      return this.$store.state.resetPassword.phoneNumber
    },
  },
  methods: {
    handleSubmit() {
      this.$store.commit('resetPassword/SET_CODE', this.code)
      this.$router.push(
        this.localePath({ name: 'auth-reset-password-new-password' })
      )
    },
    async resendCode() {
      const resetPasswordRepo = resetPasswordRepository(this.$axios)
      try {
        this.resendLoading = true
        await resetPasswordRepo.sendCode(this.phoneNumber)
        this.$refs.resend.startTimer()
      } catch (e) {
      } finally {
        this.resendLoading = false
      }
    },
  },
}
</script>
