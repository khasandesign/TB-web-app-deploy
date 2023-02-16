<script>
import { morphism } from 'morphism'
import { SEND_CODE } from '~/api/auth'

export default {
  data() {
    return {
      loading: false,
    }
  },
  computed: {
    phoneNumber() {
      return this.$store.state.signup.signupData.phoneNumber
    },
  },
  methods: {
    setPhoneNumber(value) {
      this.$store.commit('signup/SET_SIGNUP_DATA', {
        ...this.$store.state.auth.signupData,
        phoneNumber: value,
      })
    },
    async handleSubmit() {
      try {
        this.loading = true
        await this.$axios[SEND_CODE.method](
          SEND_CODE.url,
          morphism(SEND_CODE.schema, { phoneNumber: this.phoneNumber })
        )
        this.$router.push(this.localePath({ name: 'auth-sign-up-verify' }))
      } catch (error) {
      } finally {
        this.loading = false
      }
    },
  },
  render(h) {
    return this.$scopedSlots.default({
      loading: this.loading,
      phoneNumber: this.phoneNumber,
      setPhoneNumber: this.setPhoneNumber,
      handleSubmit: this.handleSubmit,
    })
  },
}
</script>
