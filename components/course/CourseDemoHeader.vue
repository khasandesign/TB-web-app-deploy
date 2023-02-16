<template>
  <div
    class="app-header bg-midnight container-fluid text-label-primary-dark z-50 text-label-primary-dark"
  >
    <!-- Desktop header -->
    <div
      class="w-10/12 mx-auto hidden h-20 xl:flex justify-between items-center"
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
      </section>

      <section class="flex justify-end items-center space-x-5">
        <AppHeaderSearch />
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
      @toggle="toggleMobileMenu"
    />
    <!-- Mobile menu -->
    <MobileMenu
      :show="showMobileMenu"
      :include-header="false"
      @close="showMobileMenu = false"
      @search="isSearchActive = true"
      @toggle="showMobileMenu = !showMobileMenu"
    />
  </div>
</template>

<script>
import HeaderMixin from '~/mixins/HeaderMixin'
import MobileMenu from '~/components/layout/MobileMenu'
import AppHeaderSearch from '~/components/layout/AppHeaderSearch'
import LangSwitcher from '~/components/layout/LangSwitcher'
import UserDropdown from '~/components/layout/UserDropdown'

export default {
  name: 'CourseDemoHeader',
  components: { UserDropdown, LangSwitcher, AppHeaderSearch, MobileMenu },
  mixins: [HeaderMixin],
}
</script>
