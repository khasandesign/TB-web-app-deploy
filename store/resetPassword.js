export const state = () => ({
  phoneNumber: '',
  code: '',
})

export const mutations = {
  SET_PHONE_NUMBER(state, value) {
    state.phoneNumber = value
  },
  SET_CODE(state, value) {
    state.code = value
  },
}
