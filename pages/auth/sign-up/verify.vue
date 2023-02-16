<template>
  <div>
    <h2 class="h4 text-center md:text-start text-label-primary-dark mb-3">
      {{ $t('signUp') }}
    </h2>
    <div class="text-center md:text-start mx-auto md:ml-0 max-w-[300px] mb-8">
      <p
        class="par-2 font-normal text-label-secondary-dark inline leading-[22px]"
      >
        {{ $t('register.firstText') }} {{ $t('or') }}
        <Nuxt-link to="/auth/sign-in" class="text-label-primary-dark">
          {{ $t('register.signIn') }}
        </Nuxt-link>
        {{ $t('register.secondText') }}
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
    </BaseForm>
    <div
      class="space-x-2 par-2 text-[15px] text-center md:text-left font-normal text-label-tertiary-dark leading-[22px]"
    >
      <span v-if="time !== 0">
        {{ $t('register.codeMessage', { phoneNumber: maskedPhoneNumber }) }}
      </span>
      <AuthCircularLoading
        :size="16"
        :percent="isReSendingCode ? 25 : percentage"
        class="inline-block"
        :class="{ 'animate-spin': isReSendingCode }"
      />
      <button
        v-if="time === 0"
        type="button"
        class="text-label-primary-dark"
        @click="reSendCode"
      >
        {{ $t('register.resend') }}
      </button>
    </div>
    <AuthSocialButtons class="mt-6" />
  </div>
</template>

<script>
import { morphism } from 'morphism'
import { VERIFY, SEND_CODE } from '@/api/auth'
import AuthSocialButtons from '~/components/auth/AuthSocialButtons.vue'

const RESEND_TIMEOUT = 60

export default {
  name: 'SignUpVerify',
  components: { AuthSocialButtons },
  layout: 'authLayout',
  data() {
    return {
      loading: false,
      isReSendingCode: false,
      isAnimateSpin: false,
      code: '',
      time: RESEND_TIMEOUT,
    }
  },
  head() {
    return {
      title: this.$t('signUp'),
    }
  },
  computed: {
    percentage() {
      return ((RESEND_TIMEOUT - this.time) / RESEND_TIMEOUT) * 100
    },
    maskedPhoneNumber() {
      const phone = this.$store.state.signup.signupData.phoneNumber

      return phone
        .split('')
        .map((digit, index) => {
          if (digit !== ' ' && index > 3 && index < 8) {
            return '*'
          }
          return digit
        })
        .join('')
    },
  },
  mounted() {
    this.startTimer()
  },
  methods: {
    startTimer() {
      this.time = RESEND_TIMEOUT
      this.timer = setInterval(() => {
        this.time--
        if (this.time === 0) {
          clearInterval(this.timer)
        }
      }, 1000)
    },
    async reSendCode() {
      try {
        const phoneNumber =
          this.$store.state.signup.signupData.phoneNumber.replace('+', '')
        this.isReSendingCode = true
        await this.$axios[SEND_CODE.method](
          SEND_CODE.url,
          morphism(SEND_CODE.schema, { phoneNumber })
        )
        this.isReSendingCode = false
        this.startTimer()
      } finally {
        this.isReSendingCode = false
      }
    },
    async handleSubmit() {
      try {
        this.loading = true
        await this.$axios[VERIFY.method](
          VERIFY.url,
          morphism(VERIFY.schema, {
            phoneNumber: this.$store.state.signup.signupData.phoneNumber,
            code: this.code,
          })
        )
        this.$router.push('/auth/sign-up/finish')
      } catch (error) {
        if (error?.response?.data?.detail) {
          this.$refs.form.$refs.observer.setErrors({
            verificationCode: error?.response?.data?.detail,
          })
        }
      } finally {
        this.loading = false
      }
    },
  },
}
</script>
