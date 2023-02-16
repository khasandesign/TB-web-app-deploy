<template>
  <div class="bg-bg-primary min-h-screen h-max">
    <AppHeader fixed />
    <div
      v-if="isSelect"
      class="bg-black/[.8] fixed top-[100px] w-full h-screen"
      @click="isSelect = false"
    ></div>
    <div
      class="sticky menu w-full top-[72px] bg-[#111111] z-20 block md:hidden"
    >
      <div
        class="selected px-4 py-4 flex items-center justify-between"
        @click="isSelect = !isSelect"
      >
        <h2 class="text-label-primary-dark text-[16px] leading-5">
          {{ pageTitle }}
        </h2>
        <span
          class="material-icons text-[16px] text-label-primary-dark transform transition-transform duration-300"
          :class="{ 'rotate-180': isSelect }"
        >
          expand_more
        </span>
      </div>
      <div :class="isSelect ? 'h-auto opacity-1' : 'h-0 opacity-0'">
        <div class="mb-5">
          <h2
            class="text-[11px] px-[11px] leading-4 mb-5 text-label-secondary-dark uppercase"
          >
            {{ $t('contact.allInfo') }}
          </h2>
          <ul class="text-[16px] leading-[22px] text-label-primary-dark">
            <li v-for="(item, index) in commonItems" :key="index">
              <nuxt-link
                class="py-[7px] px-[14px] block mb-1 hover:bg-gray-3-dark duration-300"
                :to="item.to"
                @click.native="isSelect = false"
              >
                {{ $t(item.key) }}
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div>
          <h2
            class="text-[11px] px-[14px] leading-4 mb-5 text-label-secondary-dark uppercase"
          >
            {{ $t('formalities') }}
          </h2>
          <ul class="text-[16px] leading-[22px] text-label-primary-dark">
            <li v-for="(item, index) in formalItems" :key="index">
              <nuxt-link
                class="py-[7px] px-[14px] block mb-1 hover:bg-gray-3-dark duration-300"
                :to="item.to"
                @click.native="isSelect = false"
              >
                {{ $t(item.key) }}
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="container w-full mb-10 md:mt-12">
      <div class="content flex justify-between md:space-x-6 md:px-4">
        <aside
          class="menu hidden sticky self-start md:block top-[100px] shrink-0"
        >
          <section class="mb-5">
            <h2
              class="text-[11px] px-[14px] leading-4 mb-5 text-label-secondary-dark uppercase"
            >
              {{ $t('contact.allInfo') }}
            </h2>
            <ul class="text-[16px] leading-[22px] text-label-primary-dark">
              <li v-for="(item, index) in commonItems" :key="index">
                <nuxt-link
                  class="py-[7px] px-[14px] inline-block rounded-lg mb-1 hover:bg-gray-3-dark duration-300"
                  :to="item.to"
                >
                  {{ $t(item.key) }}
                </nuxt-link>
              </li>
            </ul>
          </section>
          <section>
            <h2
              class="text-[11px] px-[14px] leading-4 mb-5 text-label-secondary-dark uppercase"
            >
              {{ $t('formalities') }}
            </h2>
            <ul class="text-[16px] leading-[22px] text-label-primary-dark">
              <li v-for="(item, index) in formalItems" :key="index">
                <nuxt-link
                  class="py-[7px] px-[14px] inline-block rounded-lg mb-1 hover:bg-gray-3-dark duration-300"
                  :to="item.to"
                >
                  {{ $t(item.key) }}
                </nuxt-link>
              </li>
            </ul>
          </section>
        </aside>
        <main class="md:flex-1 h-auto mt-4 md:mt-0">
          <div class="w-full xl:w-[80%] 2xl:md:w-[66%]">
            <Nuxt />
          </div>
        </main>
      </div>
    </div>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '~/components/layout/AppHeader.vue'
export default {
  components: { AppHeader },
  data() {
    return {
      isSelect: false,
    }
  },
  computed: {
    pageTitle() {
      const titles = {
        contacts: this.$t('contacts'),
        faq: this.$t('faq.title'),
        privacy: this.$t('footer.policy'),
        terms: this.$t('terms.service'),
        news: this.$t('contact.news'),
        purchasing: this.$t('contact.buyCourse'),
      }

      return titles[this.getRouteBaseName()]
    },
    commonItems() {
      return [
        {
          to: this.localePath({ name: 'contacts' }),
          key: 'contacts',
        },
        {
          to: this.localePath({ name: 'faq' }),
          key: 'faq.title',
        },
        {
          name: 'Новости',
          to: this.localePath('/news'),
          key: 'contact.news',
        },
        {
          to: this.localePath('/purchasing'),
          key: 'contact.buyCourse',
        },
      ]
    },
    formalItems() {
      return [
        {
          to: this.localePath({ name: 'terms' }),
          key: 'footer.termsOfUsage',
        },
        {
          to: this.localePath({ name: 'privacy' }),
          key: 'footer.policyShort',
        },
        {
          to: this.localePath('/chat'),
          key: 'footer.supportChat',
        },
      ]
    },
  },
  created() {},
}
</script>

<style lang="scss" scoped>
.menu {
  a.nuxt-link-active {
    background: rgba(255, 255, 255, 0.04);
  }
}
</style>
