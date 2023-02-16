export const state = () => ({
  isSearchActive: false,
  course: null,
  domain: '',
})

export const mutations = {
  SET_IS_SEARCH_ACTIVE(state, value) {
    state.isSearchActive = value
  },
  SET_COURSE(state, value) {
    state.course = value
  },
  SET_DOMAIN(state, value) {
    state.domain = value
  },
}
