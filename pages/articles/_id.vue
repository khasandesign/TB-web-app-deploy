<template>
  <div>
    <article
      v-if="data.article"
      class="bg-midnight text-label-primary-dark mt-6 lg:mt-20"
    >
      <div class="flex items-center flex-col">
        <section class="mb-8 px-4 lg:px-0 lg:w-8/12 xl:w-1/2">
          <h1
            class="font-bold text-[28px] md:leading-[42px] md:text-4xl lg:leading-[52px] lg:text-5xl mb-3 lg:mb-4"
          >
            {{ data.article.title }}
          </h1>
          <ArticleInfo :info="data.info" />
        </section>
        <figure class="w-full lg:w-10/12 xl:w-8/12 mx-auto">
          <img
            :src="data.article.image"
            class="w-full h-auto mb-4"
            :alt="data.article.title"
          />
          <figcaption
            class="mt-3 caption text-label-secondary-dark text-center"
          >
            Image title
          </figcaption>
        </figure>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div
          class="px-4 lg:px-0 lg:w-8/12 xl:w-1/2 mt-6 lg:mt-[40px]"
          v-html="data.article.body"
        ></div>
        <div
          class="w-full px-4 lg:px-0 lg:w-8/12 xl:w-1/2 pb-[18px] border-b border-b-gray-4-dark mt-12 lg:mt-[50px] flex flex-col gap-y-6 gap-x-4 lg:gap-0 md:flex-row items-center justify-between"
        >
          <ArticleInfo :info="data.info" />
          <div class="flex gap-x-4">
            <BaseButton
              icon="share"
              :circle="true"
              color="gray"
              size="large"
              @click="openModal"
            />
            <BaseButton
              icon="bookmark"
              :circle="true"
              color="gray"
              size="large"
            />
          </div>
        </div>
        <div class="w-full px-4 lg:px-0 lg:w-8/12 xl:w-1/2 mt-[15px]">
          <h1
            class="text-xl leading-8 font-bold mb-6 justify-self-start w-full"
          >
            {{ $t('recommend') }}
          </h1>
          <ArticleCard :article="data.recommend" />
        </div>
      </div>
      <ShareModal
        :show="showModal"
        :data="{
          url,
          image: data.article.image,
        }"
        @close="closeModal"
      >
        <h2 class="mb-2 font-bold leading-7 text-2xl w-[360px] md:w-[400px]">
          {{ data.article.title }}
        </h2>
        <ArticleInfo :info="data.info" class="w-max text-label-primary-dark" />
      </ShareModal>
    </article>
  </div>
</template>

<script>
import { morphism } from 'morphism'
import { ARTICLE } from '@/api/article'
export default {
  name: 'AppArticle',
  async asyncData({ $axios, params }) {
    const { data } = await $axios[ARTICLE.ITEM.method](
      `${ARTICLE.ITEM.url}/${params.id}`
    )

    const article = morphism(ARTICLE.ITEM.schema, data)

    return { data: article }
  },
  data() {
    return {
      data: {},
      showModal: false,
    }
  },
  head() {
    return {
      title: this.data.article.title,
    }
  },
  computed: {
    url() {
      return (
        this.$store.state.ui.domain +
        this.localePath({
          name: 'articles-id',
          params: { id: this.data.article.id },
        })
      )
    },
  },
  methods: {
    openModal() {
      this.showModal = true
    },
    closeModal() {
      this.showModal = false
    },
  },
}
</script>
