export const state = () => ({
  signupData: {
    phoneNumber: '',
    code: '',
    name: '',
    password: '',
    passwordConfirmation: '',
  },
})

export const mutations = {
  SET_SIGNUP_DATA(state, value) {
    state.signupData = value
  },
}
