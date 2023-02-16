<template>
  <div class="blogs-page bg-[#080808] text-label-primary-dark">
    <div
      v-if="loading"
      class="fixed inset-0 flex items-center justify-center bg-black/50"
    >
      <BaseSpinner :size="48" />
    </div>

    <div class="container pt-6 md:pt-[156px] pb-14 md:pb-20">
      <div class="content">
        <main class="w-full xl:w-[70%]">
          <h1
            class="h1 text-center md:text-left mb-[56px] md:mb-[100px] text-[32px] leading-[36px] md:text-[72px] md:leading-[72px]"
          >
            {{ $t('blogs.titlePartOne') }}
            <span class="block yesevaFont font-normal tracking-tight">{{
              $t('blogs.titlePartTwo')
            }}</span>
            {{ $t('blogs.subscribe') }}
          </h1>
          <h2 class="h5 italic font-semibold hidden md:block">
            {{ $t('blogs.caption') }}
          </h2>
          <h2 class="h5 font-semibold hidden md:block">
            {{ $t('blogs.caption2') }}
          </h2>
          <BaseButton size="large" class="bg-[#38a5e0] mt-5 hidden md:flex">
            <img src="@/static/telegram.svg" alt="telegram icon" />
            {{ $t('blogs.follow') }}</BaseButton
          >
          <ul class="mt-14 lg:mt-24">
            <nuxt-link
              v-for="item in articles"
              :key="item.id"
              :to="localePath({ name: 'articles-id', params: { id: item.id } })"
            >
              <BlogItem :item="item" />
            </nuxt-link>
          </ul>
          <section
            v-if="total > pageSize"
            class="flex justify-center my-4 md:my-8"
          >
            <BasePagination
              :total-items="total"
              :current-page.sync="page"
              :page-size="pageSize"
            />
          </section>
          <BaseButton
            size="large"
            class="w-full mt-8 mb-7 flex justify-center md:hidden bg-[#38a5e0]"
            ><img src="@/static/telegram.svg" alt="telegram icon" />{{
              $t('blogs.follow')
            }}</BaseButton
          >
          <p
            class="caption block md:hidden text-center text-label-tertiary-dark"
          >
            {{ $t('blogs.caption') }}
          </p>
          <p
            class="caption block md:hidden text-center text-label-tertiary-dark"
          >
            {{ $t('blogs.caption2') }}
          </p>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import { morphism } from 'morphism'
import { ARTICLE } from '@/api/article'

const getArticles = async ($axios, query) => {
  const { page = 1, limit = 5 } = query
  const response = await $axios.get(ARTICLE.LIST.url, {
    query: { page, limit },
  })
  const articles = morphism(ARTICLE.LIST.schema, response.data.items)
  return { articles, total: response.data.total }
}

export default {
  name: 'BlogsPage',
  asyncData({ $axios, query }) {
    return getArticles($axios, query)
  },
  data() {
    return {
      articles: [],
      loading: false,
      pageSize: 5,
    }
  },
  head() {
    return {
      title: this.$t('blogs.blog'),
    }
  },
  computed: {
    page: {
      get() {
        return +this.$route.query.page || 1
      },
      set(value) {
        this.$router.replace(
          this.localePath({
            name: 'articles',
            query: { ...this.$route.query, page: value.toString() },
          })
        )
      },
    },
  },

  watch: {
    async page() {
      try {
        this.loading = true
        const { articles } = await getArticles(this.$axios, this.$route.query)
        this.articles = articles
      } finally {
        this.loading = false
      }
    },
  },
}
</script>

<style lang="scss">
.blogs-page {
  background-image: url(assets/img/Art.svg);
  background-repeat: no-repeat;
  background-position: 92% 9%;
  @media screen and (max-width: 770px) {
    background-size: 300% auto;
  }
}
</style>
