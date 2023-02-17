<template>
  <div class="relative pb-14 border-b border-b-gray-1-dark mb-4 read-articles">
    <h1 class="mb-6 font-bold leading-8 text-xl">
      {{ $t('articlesRead') }}
    </h1>
    <VueSlickCarousel
      v-if="windowWidth"
      :arrows="false"
      :infinite="false"
      :slides-to-show="1"
      :variable-width="true"
    >
      <div
        v-for="(item, idx) in readArticles"
        :key="idx"
        class="lg:w-[586px] md:pr-4 lg:pr-6"
      >
        <div
          class="h-[176px] bg-gray-3-dark rounded-10px border border-gray-3-dark !flex justify-between pt-[10px] pr-[10px] pl-5"
        >
          <div>
            <h3
              class="flex lg:items-center gap-x-1 text-label-secondary-dark my-[10px] font-medium text-[18px]"
            >
              <span class="material-icons">notes</span>
              <span class="text-[15px]">{{ $t('blogs.article') }}</span>
            </h3>
            <NuxtLink
              :to="localePath({ name: 'articles-id', params: { id: item.id } })"
              class="block w-[235px] lg:w-[322px] text-base leading-6 lg:h6 mb-4 font-bold"
              >{{ item.title }}
            </NuxtLink>
            <div
              class="flex gap-x-2 text-label-secondary-dark font-medium text-[15px] leading-5"
            >
              <span class="material-symbols-outlined">visibility</span>
              <span>{{ item.view }} {{ $t('view') }}</span>
            </div>
          </div>
          <div>
            <img
              :src="item.image"
              class="rounded-md w-[68px] h-[68px] md:w-[196px] md:h-[156px]"
              alt="top-brains-article-recommend-image"
            />
          </div>
        </div>
      </div>
    </VueSlickCarousel>
    <div v-else class="flex flex-col w-full gap-y-4">
      <div
        v-for="(item, idx) in readArticles"
        :key="idx"
        class="w-[343px] h-[176px] bg-gray-3-dark rounded-10px border border-gray-3-dark !flex justify-between pt-[10px] pr-[10px] pl-5"
      >
        <div>
          <h3
            class="flex lg:items-center gap-x-1 text-label-secondary-dark my-[10px] font-medium text-[18px]"
          >
            <span class="material-icons">notes</span>
            <span class="text-[15px]">{{ $t('blogs.article') }}</span>
          </h3>
          <NuxtLink
            :to="localePath({ name: 'articles-id', params: { id: item.id } })"
            class="block w-[235px] lg:w-[322px] text-base leading-6 lg:h6 mb-4 font-bold"
            >{{ item.title }}
          </NuxtLink>
          <div
            class="flex gap-x-2 text-label-secondary-dark font-medium text-[15px] leading-5"
          >
            <span class="material-symbols-outlined">visibility</span>
            <span>{{ item.view }} {{ $t('view') }}</span>
          </div>
        </div>
        <div>
          <img
            :src="item.image"
            class="rounded-md w-[68px] h-[68px] md:w-[196px] md:h-[156px]"
            alt="top-brains-article-recommend-image"
          />
        </div>
      </div>
    </div>
    <div
      class="hidden lg:block w-56 h-[176px] bg-right-shadow absolute right-0 top-1/2 -translate-y-1/2 z-20"
    ></div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'

export default {
  name: 'ProfileCertificates',
  components: {
    VueSlickCarousel,
  },
  props: {
    readArticles: {
      type: Array,
      default: () => {},
    },
  },
  computed: {
    windowWidth() {
      if (typeof window !== 'undefined') {
        const width = window.innerWidth
        if (width >= 768) {
          return true
        }
        return false
      }
      return true
    },
  },
}
</script>
