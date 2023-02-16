<template>
  <div
    class="space-x-2 par-2 text-center md:text-left font-normal text-label-tertiary-dark"
  >
    <span v-if="time !== 0">
      {{ $t('register.codeMessage', { phoneNumber: maskedPhoneNumber }) }}
    </span>
    <AuthCircularLoading
      :size="16"
      :percent="loading ? 25 : percentage"
      class="inline-block"
      :class="{ 'animate-spin': loading }"
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
</template>

<script>
const RESEND_TIMEOUT = 60

export default {
  name: 'CodeResend',
  props: {
    phoneNumber: {
      type: String,
      required: true,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isAnimateSpin: false,
      code: '',
      time: RESEND_TIMEOUT,
    }
  },
  computed: {
    percentage() {
      return ((RESEND_TIMEOUT - this.time) / RESEND_TIMEOUT) * 100
    },
    maskedPhoneNumber() {
      return this.phoneNumber
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
    reSendCode() {
      this.$emit('resend')
    },
  },
}
</script>
