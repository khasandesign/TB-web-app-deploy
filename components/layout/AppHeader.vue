<template>
  <div class="app-header bg-midnight text-label-primary-dark z-50 sticky top-0">
    <!-- Desktop header -->
    <CoursePageHeader v-if="isCoursePage" />
    <div
      v-else
      class="container hidden h-20 xl:flex justify-between items-center"
    >
      <section class="flex items-center">
        <div class="flex items-center mr-24">
          <nuxt-link
            exact-active-class=""
            active-class=""
            :to="localePath('/')"
          >
            <img src="@/assets/images/Logo.svg" alt="logo" />
          </nuxt-link>
          <template v-if="courseAuthorAvatar">
            <div class="w-[1px] h-12 bg-gray-1-dark mx-5" />
            <img
              :src="courseAuthorAvatar"
              alt="Course author"
              class="w-12 h-12 rounded-full object-cover transition-transform duration-200 hover:scale-[1.1]"
            />
          </template>
        </div>

        <ul
          class="flex items-center space-x-[10px] font-semibold"
          :class="{ 'hidden 2xl:flex': isSearchActive }"
        >
          <li v-for="(item, idx) in items" :key="idx">
            <BaseLink :to="item.to" :icon="item.icon">
              {{ item.title }}
            </BaseLink>
          </li>
        </ul>
        <AppHeaderSearch />
      </section>

      <section class="flex justify-end items-center space-x-5">
        <LangSwitcher />
        <UserDropdown v-if="$auth.loggedIn" />

        <BaseButton
          v-else
          color="gray"
          size="small"
          :to="localePath('auth-sign-in')"
        >
          {{ $t('enter') }}
        </BaseButton>
      </section>
    </div>
    <!-- End of desktop header -->
    <!-- Mobile header -->
    <MobileHeader
      key="header"
      :show-mobile-menu="showMobileMenu"
      @toggle="showMobileMenu = !showMobileMenu"
    />
    <!-- Mobile menu -->
    <MobileMenu
      :show="showMobileMenu"
      :include-header="!fixed"
      @close="showMobileMenu = false"
      @search="isSearchActive = true"
      @toggle="showMobileMenu = !showMobileMenu"
    />
  </div>
</template>

<script>
import MobileMenu from './MobileMenu.vue'
import LangSwitcher from '@/components/layout/LangSwitcher.vue'
import UserDropdown from '@/components/layout/UserDropdown.vue'
import AppHeaderSearch from '~/components/layout/AppHeaderSearch'
import CoursePageHeader from '~/components/layout/CoursePageHeader'

export default {
  name: 'AppHeader',
  components: {
    CoursePageHeader,
    AppHeaderSearch,
    MobileMenu,
    LangSwitcher,
    UserDropdown,
  },
  props: {
    fixed: {
      type: Boolean,
      default: true,
    },
  },
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
    isCoursePage() {
      return this.getRouteBaseName() === 'courses-courseId'
    },
    items() {
      return [
        {
          title: this.$t('allCourses'),
          to: this.localePath('/'),
        },
        {
          title: this.$t('soon'),
          to: this.localePath('/soon'),
        },
        {
          title: this.$t('header.collaboration'),
          to: this.localePath('/collaboration'),
        },
        {
          title: this.$t('header.about'),
          to: this.localePath('/about'),
        },
      ]
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
}
</script>

<style lang="scss">
.app-header {
  .nuxt-link-exact-active {
    background: rgba(255, 255, 255, 0.04);
  }
}
</style>
