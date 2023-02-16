export default {
  data() {
    return {
      showMobileMenu: false,
    }
  },
  computed: {
    isSearchActive: {
      get() {
        return this.$store.state.ui.isSearchActive
      },
      set(value) {
        this.$store.commit('ui/SET_IS_SEARCH_ACTIVE', value)
      },
    },
    searchText: {
      get() {
        return this.$store.state.searchText
      },
      set(value) {
        this.$store.commit('SET_SEARCH_TEXT', value)
      },
    },
    courseAuthorAvatar() {
      return this.$store.state.ui.course?.author?.profile?.avatar
    },
  },
  watch: {
    showMobileMenu: {
      immediate: true,
      handler() {
        if (process.client) {
          if (this.showMobileMenu) {
            document.body.style.overflowY = 'hidden'
          } else {
            document.body.style.removeProperty('overflow-y')
          }
        }
      },
    },
    '$route.fullPath'() {
      if (this.showMobileMenu) {
        this.showMobileMenu = false
      }
    },
  },
  methods: {
    toggleMobileMenu() {
      this.showMobileMenu = !this.showMobileMenu
    },
  },
}
