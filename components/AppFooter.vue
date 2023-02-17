<template>
  <div
    class="w-full bg-[#121212] h-auto mt-12 md:mt-20 pt-20 border-t border-[hsla(0,0%,100%,.08)] overflow-x-hidden text-label-primary-dark"
  >
    <main class="container">
      <div class="content">
        <div class="font-medium">
          <div
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-x-5"
            :class="paddingBottom"
          >
            <div class="flex items-center flex-col lg:block mb-[50px] lg:m-0">
              <nuxt-link :to="localePath('/')">
                <img
                  src="~/static/logo-large.svg"
                  alt="topbrains-logo"
                  class="mb-3"
                />
              </nuxt-link>

              <p
                class="mb-[36px] par-2 text-label-secondary-dark text-center lg:text-left"
              >
                {{ $t('footer.desc') }}
              </p>
              <ul class="flex gap-x-5">
                <li
                  v-for="({ url, image, alternative }, index) in socials"
                  :key="index"
                >
                  <a :href="url" class="hover:opacity-70" target="_blank">
                    <img :src="image" :alt="alternative" />
                  </a>
                </li>
              </ul>
            </div>
            <div class="order-2 lg:order-none lg:pl-6">
              <h3
                class="text-label-secondary-dark mb-6 par-2 text-center lg:text-justify"
              >
                {{ $t('allCourses') }}
              </h3>
              <ul
                class="flex flex-col gap-y-5 w-full items-center lg:items-stretch hover:[&>li>a]:text-[hsla(0,0%,100%,.9)] hover:[&>li>a]:opacity-70"
              >
                <li>
                  <NuxtLink :to="localePath('/')">{{
                    $t('allCourses')
                  }}</NuxtLink>
                </li>
                <li>
                  <NuxtLink :to="localePath('/')">{{ $t('soon') }}</NuxtLink>
                </li>
                <li>
                  <button
                    class="hover:text-[hsla(0,0%,100%,.9)] hover:opacity-70"
                    @click="handleSearch"
                  >
                    {{ $t('search') }}
                  </button>
                </li>
                <li>
                  <nuxt-link :to="localePath('articles')">
                    {{ $t('footer.blog') }}
                  </nuxt-link>
                </li>
              </ul>
            </div>
            <div class="order-1 mb-12 lg:order-none lg:mb-0 lg:pr-6">
              <h3
                class="text-label-secondary-dark mb-6 par-2 text-center lg:text-justify"
              >
                {{ $t('formalities') }}
              </h3>
              <ul
                class="flex flex-col gap-y-5 w-full items-center lg:items-stretch hover:[&>li>a]:text-[hsla(0,0%,100%,.9)] hover:[&>li>a]:opacity-70"
              >
                <li>
                  <NuxtLink :to="localePath('/terms')">{{
                    $t('footer.termsOfUsage')
                  }}</NuxtLink>
                </li>
                <li>
                  <NuxtLink :to="localePath('/privacy')">{{
                    $t('footer.policyShort')
                  }}</NuxtLink>
                </li>
                <li>
                  <NuxtLink :to="localePath('/contacts')"
                    >{{ $t('contacts') }}
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink :to="localePath('/support')">{{
                    $t('footer.supportChat')
                  }}</NuxtLink>
                </li>
                <li>
                  <NuxtLink :to="localePath('/purchase')">{{
                    $t('purchase.payment')
                  }}</NuxtLink>
                </li>
              </ul>
            </div>
            <div
              v-if="!$auth.loggedIn"
              class="w-full order-3 lg:order-none mt-12 md:mt-0"
            >
              <h3
                class="text-label-secondary-dark mb-[26px] par-2 text-center lg:text-justify"
              >
                {{ $t('createAccount') }}
              </h3>
              <AuthSendCodeProvider
                v-slot="{ phoneNumber, setPhoneNumber, loading, handleSubmit }"
              >
                <BaseForm @submit="handleSubmit">
                  <BaseInputTel
                    class="mb-4"
                    name="phoneNumber"
                    rules="required|tel"
                    size="large"
                    :value="phoneNumber"
                    @input="setPhoneNumber"
                  />
                  <div class="mb-6 h-12 flex items-center justify-center">
                    <BaseButton
                      type="submit"
                      :loading="loading"
                      size="large"
                      color="primary"
                      class="w-full justify-center"
                    >
                      {{ $t('footer.join') }}
                    </BaseButton>
                  </div>
                </BaseForm>
              </AuthSendCodeProvider>
              <i18n
                path="terms.termsAndPrivacy"
                tag="p"
                class="font-normal w-full caption text-label-tertiary-dark text-center px-4"
              >
                <template #terms>
                  <nuxt-link :to="localePath('terms')" class="underline">
                    {{ $t('terms.service') }}
                  </nuxt-link>
                </template>
                <template #privacy>
                  <nuxt-link :to="localePath('privacy')" class="underline">
                    {{ $t('terms.privacy') }}
                  </nuxt-link>
                </template>
              </i18n>
            </div>
            <div v-else class="w-full order-3 mt-12 md:mt-0 lg:order-none">
              <h3
                class="text-label-secondary-dark mb-[26px] par-2 text-center lg:text-justify"
              >
                {{ $t('contact.news') }}
              </h3>
              <h5 class="h5 italic mb-5 text-center lg:text-start">
                {{ $t('unAuthFooterDesc') }}
              </h5>
              <div
                class="h-14 w-full md:h-auto lg:w-auto lg:block bg-[#38A5E0] md:bg-transparent hidden md:flex items-center justify-center"
              >
                <BaseButton
                  class="!bg-[#38A5E0]"
                  size="large"
                  :href="$store.state.socialNetworks.telegram"
                >
                  <img src="~/static/telegram.svg" alt="topbrains-telegram" />
                  {{ $t('blogs.follow') }}
                </BaseButton>
              </div>
            </div>
          </div>
          <div
            class="border-t hidden mb-4 pt-8 pb-10 border-t-gray-5-dark w-full lg:flex gap-x-10 text-gray-8-dark font-medium"
          >
            <img src="~/static/logo.svg" alt="topbrains-logo" />
            <span>&copy; 2021 TopBrains</span>
            <span class="flex items-center gap-x-[11.34px]">
              <span class="material-icons">lock</span>
              {{ $t('footer.ssl') }}
            </span>
          </div>
        </div>
      </div>
    </main>
    <div
      v-if="$auth.loggedIn"
      class="w-[100vw] flex items-center justify-center lg:w-auto h-14 lg:h-auto bg-[#38A5E0] lg:bg-transparent md:hidden"
    >
      <BaseButton
        class="!bg-[#38A5E0]"
        size="large"
        href="https://t.me/mohirdev"
      >
        <img src="~/static/telegram.svg" alt="topbrains-telegram" />
        {{ $t('blogs.follow') }}
      </BaseButton>
    </div>
  </div>
</template>

<script>
import AuthSendCodeProvider from '@/components/auth/AuthSendCodeProvider.vue'

export default {
  name: 'AppFooter',
  components: { AuthSendCodeProvider },
  computed: {
    paddingBottom() {
      return this.$auth.loggedIn ? 'pb-0 md:pb-14' : 'pb-14'
    },
    socials() {
      return [
        {
          image: require('~/static/facebook.svg'),
          url: this.$store.state.socialNetworks.facebook,
          alternative: 'topbrains-facebook',
        },
        {
          image: require('~/static/instagram.svg'),
          url: this.$store.state.socialNetworks.instagram,
          alternative: 'topbrains-instagram',
        },
        {
          image: require('~/static/telegram.svg'),
          url: this.$store.state.socialNetworks.telegram,
          alternative: 'topbrains-telegram',
        },
        {
          image: require('~/static/youtube.svg'),
          url: this.$store.state.socialNetworks.youtube,
          alternative: 'topbrains-youtube',
        },
      ]
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
    handleSearch() {
      this.isSearchActive = true
    },
  },
}
</script>
