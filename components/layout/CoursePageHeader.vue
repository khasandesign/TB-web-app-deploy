<template>
  <div
    class="container hidden h-20 xl:flex justify-between items-center text-label-primary-dark"
  >
    <CourseShareModal
      v-if="course"
      :show="showShareModal"
      :course="course"
      @close="showShareModal = false"
    />
    <section class="flex items-center">
      <div class="flex items-center mr-24">
        <nuxt-link exact-active-class="" active-class="" :to="localePath('/')">
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

      <!-- In course lessons page we will not show links-->
      <ul
        class="flex items-center space-x-[10px] text-label-primary-dark font-medium"
        :class="{ 'hidden 2xl:flex': isSearchActive }"
      >
        <li>
          <BaseLink
            :to="
              localePath({
                name: 'courses-courseId-lessons-lessonId',
                params: {
                  courseId: $route.params.courseId,
                  lessonId: 1,
                },
              })
            "
            icon="play_arrow"
          >
            {{ $t('demo') }}
          </BaseLink>
        </li>
        <li>
          <BaseLink
            :to="
              localePath({
                name: getRouteBaseName(),
                params: $route.params,
                query: { ...$route.query, modal: 'share' },
              })
            "
            icon="ios_share"
          >
            {{ $t('share') }}
          </BaseLink>
        </li>
      </ul>
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
</template>

<script>
import AppHeaderSearch from '~/components/layout/AppHeaderSearch'
import LangSwitcher from '~/components/layout/LangSwitcher'
import UserDropdown from '~/components/layout/UserDropdown'
export default {
  name: 'CoursePageHeader',
  components: { UserDropdown, LangSwitcher, AppHeaderSearch },
  computed: {
    showShareModal: {
      get() {
        return this.$route.query.modal === 'share'
      },
      set(value) {
        this.$router.replace(
          this.localePath({
            name: this.getRouteBaseName(),
            params: this.$route.params,
            query: { ...this.$route.query, modal: value || undefined },
          })
        )
      },
    },
    course() {
      return this.$store.state.ui.course
    },
    courseAuthorAvatar() {
      return this.course?.author?.profile?.avatar
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
}
</script>
