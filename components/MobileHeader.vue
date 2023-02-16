<template>
  <div
    class="bg-midnight w-full h-[72px] xl:hidden flex items-center justify-between"
  >
    <section v-if="isSearchActive" class="w-full flex items-center px-4">
      <div class="text-lg mr-4">
        <span class="material-icons">search</span>
      </div>
      <input
        v-model="searchText"
        v-focus
        type="text"
        :placeholder="$t('searchPlaceholder')"
        class="bg-transparent outline-none flex-1"
        @keyup.esc="deactivateSearch"
        @keyup.enter="handleSearch"
      />
      <button
        class="w-7 h-7 rounded-full text-lg bg-label-secondary-dark text-black"
        @click="closeSearch"
      >
        <span class="material-icons">close</span>
      </button>
    </section>
    <section v-else class="w-full px-4 flex items-center justify-between">
      <HamburgerBtn :open="showMobileMenu" @click="$emit('toggle')" />

      <nuxt-link :to="localePath('/')">
        <img src="@/assets/images/Logo.svg" alt="logo" width="144" />
      </nuxt-link>
      <button class="cursor-pointer text-3xl" @click="activateSearch">
        <span class="material-icons">search</span>
      </button>
    </section>
  </div>
</template>

<script>
import HamburgerBtn from '~/components/HamburgerBtn'

export default {
  name: 'MobileHeader',
  components: { HamburgerBtn },
  props: {
    showMobileMenu: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    searchText: {
      get() {
        return this.$store.state.searchText
      },
      set(value) {
        this.$store.commit('SET_SEARCH_TEXT', value)
      },
    },
    isSearchActive: {
      get() {
        return this.$store.state.ui.isSearchActive
      },
      set(value) {
        this.$store.commit('ui/SET_IS_SEARCH_ACTIVE', value)
      },
    },
  },
  methods: {
    activateSearch() {
      this.isSearchActive = true
    },
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
