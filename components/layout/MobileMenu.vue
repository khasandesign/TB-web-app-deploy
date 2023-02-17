<template>
  <BaseTransitionSlide>
    <div
      v-if="show"
      class="flex flex-col fixed left-0 bg-midnight w-screen text-label-primary-dark overflow-y-auto z-50"
      :class="[
        includeHeader
          ? 'top-0 h-screen max-h-screen'
          : 'top-[72px] h-[calc(100vh_-_72px)] max-h-[calc(100vh_-_72px)]',
      ]"
    >
      <MobileHeader
        v-if="includeHeader"
        key="mobile-menu"
        :show-mobile-menu="show"
        @toggle="$emit('toggle')"
      />
      <main
        class="flex flex-col flex-1 overflow-y-auto"
        :class="{ 'h-full max-h-full': !includeHeader }"
      >
        <ul class="flex-1 font-medium text-lg">
          <li v-if="currentActiveItem">
            <button
              class="w-full text-2xl flex items-center px-4 py-5 border-b border-solid border-gray-1-dark"
              @click="currentActiveItem = null"
            >
              <span class="material-icons w-8 h-8 mr-2.5 rounded-full">
                chevron_left
              </span>
              <span class="text-lg">
                {{ currentActiveItem.childMenuTitle }}
              </span>
            </button>
          </li>
          <li v-for="item in navItems" :key="item.key">
            <component
              :is="getItemComponent(item)"
              class="w-full flex items-center justify-between px-4 py-3 cursor-pointer"
              :to="item.to"
              :href="item.href"
              @click="handleItemClick(item)"
            >
              <section class="flex items-center">
                <span
                  class="material-icons flex items-center justify-center w-8 h-8 mr-2.5 rounded-full"
                  :class="{ 'opacity-0': !item.icon }"
                >
                  {{ item.icon }}
                </span>
                {{ item.title }}
              </section>
              <span class="material-icons opacity-40">arrow_forward_ios</span>
            </component>
          </li>
        </ul>

        <section v-if="!currentActiveItem" class="px-4 mt-12">
          <h3 class="font-bold text-2xl">
            <span class="italic">Новости, анонсы и скидки</span> в нашем
            телеграме
          </h3>
          <BaseButton
            class="!bg-[#38A5E0] mt-4"
            icon="telegram"
            href="https://t.me"
            target="_blank"
          >
            Перейти
          </BaseButton>
        </section>

        <footer class="mt-9 flex items-center flex-col pb-[36px]">
          <img
            src="~/static/logo-large.svg"
            alt="topbrains-logo"
            class="mb-3"
          />
          <p class="mt-3 par-2 text-label-secondary-dark">
            Онлайн курсы премиум качества<br />
            от ведущих мастеров своей сферы
          </p>
          <ul class="flex gap-x-5 mt-6">
            <li>
              <a href="https://facebook.com">
                <img src="~/static/facebook.svg" alt="topbrains-facebook" />
              </a>
            </li>
            <li>
              <a href="https://instagram.com">
                <img src="~/static/instagram.svg" alt="topbrains-instagram" />
              </a>
            </li>
            <li>
              <a href="https://t.me">
                <img src="~/static/telegram.svg" alt="topbrains-telegram" />
              </a>
            </li>
            <li>
              <a href="https://youtube.com">
                <img src="~/static/youtube.svg" alt="topbrains-youtube" />
              </a>
            </li>
          </ul>
        </footer>
      </main>
    </div>
  </BaseTransitionSlide>
</template>

<script>
export default {
  name: 'MobileMenu',
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    includeHeader: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      currentActiveItem: null,
      languages: {
        uz: "O'zbekcha",
        en: 'English',
        ru: 'Русский',
      },
    }
  },
  computed: {
    items() {
      return [
        {
          key: 'lang',
          icon: 'translate',
          title: `${this.$t('header.lang')}: ${
            this.languages[this.$i18n.locale]
          }`,
          childMenuTitle: this.$t('header.changeLang'),
          children: this.$i18n.localeCodes.map((code) => ({
            icon: code === this.$i18n.locale ? 'done' : null,
            title: this.languages[code],
            to: this.switchLocalePath(code),
            key: code,
          })),
        },
        this.$auth.loggedIn
          ? {
              icon: 'person',
              title:
                this.$auth.user.profile.firstName +
                ' ' +
                this.$auth.user.profile.lastName,
              key: 'profile',
              children: [
                {
                  icon: 'person',
                  key: 'user-profile',
                  title: this.$t('user.profile'),
                  to: this.localePath('/profile'),
                },
                {
                  icon: 'logout',
                  title: this.$t('user.logout'),
                  key: 'logout',
                  onClick: async () => {
                    await this.$auth.logout()
                    await this.$router.push(
                      this.localePath({ name: 'auth-sign-in' })
                    )
                  },
                },
              ],
            }
          : {
              icon: 'logout',
              title: this.$t('signIn'),
              to: this.localePath('/auth/sign-in'),
              key: 'signIn',
            },
        {
          icon: 'grid_view',
          title: this.$t('allCourses'),
          to: this.localePath('/'),
          key: 'courses',
        },
        {
          icon: 'hourglass_empty',
          title: this.$t('soon'),
          to: this.localePath('/soon'),
          key: 'soon',
        },
        {
          icon: 'search',
          title: this.$t('search'),
          onClick: () => {
            this.close()
            this.$emit('search')
          },
          key: 'search',
        },
        {
          icon: 'school',
          title: this.$t('header.collaboration'),
          to: this.localePath('/collaboration'),
          key: 'collaboration',
        },
        {
          icon: 'info',
          title: this.$t('header.about'),
          to: this.localePath('/about'),
          key: 'about',
        },
      ]
    },
    navItems() {
      if (this.currentActiveItem) {
        return this.items.find(
          (item) => item.key === this.currentActiveItem.key
        ).children
      }

      return this.items
    },
  },
  watch: {
    show() {
      if (!this.show) {
        this.currentActiveItem = null
      }
    },
  },
  methods: {
    getItemComponent(item) {
      if (item.href) {
        return 'a'
      }
      if (item.to) {
        return 'nuxt-link'
      }

      return 'button'
    },
    handleItemClick(item) {
      if (!item.to && !item.href && item.children) {
        this.currentActiveItem = item
      }

      if (item.onClick) {
        item.onClick()
      }

      if (!item.children) {
        this.close()
      }
    },
    close() {
      this.$emit('close')
    },
  },
}
</script>
