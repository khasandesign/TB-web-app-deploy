<template>
  <div>
    <section v-if="isSearchActive" class="flex px-4 py-2 btn-sm">
      <div class="text-lg mr-2">
        <span class="material-icons"> search </span>
      </div>
      <input
        v-model="searchText"
        v-focus
        type="text"
        class="items-start text-label-primary-dark bg-transparent outline-none"
        :placeholder="$t('searchPlaceholder')"
        @blur="deactivateSearch"
        @keyup.esc="deactivateSearch"
        @keyup.enter="handleSearch"
      />
    </section>
    <button
      v-else
      class="flex items-center font-semibold px-4 py-1 text-lg rounded-lg btn-sm transition-colors duration-500 hover:bg-white/10"
      @click="isSearchActive = true"
    >
      <span class="material-icons mr-2"> search </span>
      <span class="btn-sm">{{ $t('search') }}</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'AppHeaderSearch',
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
  },
  mounted() {
    if (this.$route.query.text) {
      this.searchText = this.$route.query.text
      this.isSearchActive = true
    }
  },
  methods: {
    deactivateSearch() {
      if (!this.searchText) {
        this.isSearchActive = false
      }
    },
    closeSearch() {
      this.searchText = ''
      this.isSearchActive = false
    },
    handleSearch() {
      this.$router.push(
        this.localePath({
          name: 'search',
          query: {
            text: this.searchText,
          },
        })
      )
    },
  },
}
</script>
