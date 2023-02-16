<template>
  <div>
    <h2
      class="h4 text-center md:text-start text-label-primary-dark font-bold mb-3"
    >
      {{ $t('resetPassword.title') }}
    </h2>
    <div class="text-center md:text-start mx-auto md:ml-0 max-w-[300px] mb-8">
      <p class="par-2 text-label-secondary-dark font-normal">
        {{ $t('resetPassword.description') }}
      </p>
    </div>
    <BaseForm ref="form" @submit="handleSubmit">
      <BaseInputTel
        v-model="phoneNumber"
        v-focus
        name="phoneNumber"
        rules="required|tel"
        size="large"
        class="mb-3 w-full"
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
  name: 'ResetPassword',
  data() {
    return {
      phoneNumber: '',
      loading: false,
    }
  },
  head() {
    return {
      title: this.$t('resetPassword.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('resetPassword.description'),
        },
      ],
    }
  },

  methods: {
    async handleSubmit() {
      const resetPasswordRepo = resetPasswordRepository(this.$axios)
      this.$store.commit('resetPassword/SET_PHONE_NUMBER', this.phoneNumber)
      try {
        this.loading = true
        await resetPasswordRepo.sendCode(this.phoneNumber)
        await this.$router.push(
          this.localePath({ name: 'auth-reset-password-verify' })
        )
      } catch (e) {
        if (e.response?.data?.detail) {
          this.$refs.form.$refs.observer.setErrors({
            phoneNumber: e.response?.data?.detail,
          })
        }
      } finally {
        this.loading = false
      }
    },
  },
}
</script>
