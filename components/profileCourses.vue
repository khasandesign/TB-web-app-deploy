<template>
  <div class="mb-4">
    <h1 class="mb-6 font-bold leading-8 text-xl">
      {{ $t('yourCourses') }}
    </h1>
    <VueSlickCarousel
      :arrows="false"
      :infinite="false"
      :slides-to-show="1"
      :slides-to-scroll="1"
    >
      <ProfileCourseItem
        v-for="(item, idx) in courses"
        :key="idx"
        :data="item"
        @open="openModal"
      />
    </VueSlickCarousel>
    <ShareModal :show="show" :data="shareData" @close="closeModal">
      <h2 class="h6">Share our courses to social networks</h2>
    </ShareModal>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'

export default {
  name: 'ProfileCourses',
  components: {
    VueSlickCarousel,
  },
  props: {
    courses: {
      type: Array,
      default: undefined,
    },
  },
  data() {
    return {
      shareData: {
        url: 'https://topbrayns.com/course/21',
        image: require('~/assets/images/shareBg.png'),
      },
      show: false,
    }
  },
  methods: {
    openModal(url) {
      this.shareData.url = url
      this.show = true
    },
    closeModal() {
      this.show = false
    },
  },
}
</script>
