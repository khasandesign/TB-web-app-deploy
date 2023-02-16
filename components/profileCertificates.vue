<template>
  <div class="relative pb-14 border-b border-b-gray-1-dark mb-4 certificates">
    <h1 class="mb-6 font-bold text-xl leading-8">
      {{ $t('certificates') }}
    </h1>
    <VueSlickCarousel :arrows="false" :infinite="false" :variable-width="true">
      <nuxt-link
        v-for="{ id, resource, date, name } in certificates"
        :key="id"
        :to="
          localePath({
            name: 'certificates-certificateId',
            params: { certificateId: id },
          })
        "
        class="pr-2 md:pr-6 md:w-[342px] h-[317px]"
      >
        <div
          class="w-full h-full rounded-xl bg-gray-3-dark border border-gray-3-dark"
        >
          <div class="w-full pt-[10px] px-[10px]">
            <div
              class="rounded-lg h-[227px] w-[322px] bg-no-repeat bg-cover"
              :style="{ backgroundImage: `url('${resource}')` }"
            ></div>
          </div>
          <div class="w-full pl-4 pt-4 font-medium">
            <h2 class="par-2">{{ name }}</h2>
            <h3 class="btn-sm mt-[6px] text-label-secondary-dark">
              {{ $t('issued') }}: {{ $dayjs(date).format('MMMM D, YYYY') }}
            </h3>
          </div>
        </div>
      </nuxt-link>
    </VueSlickCarousel>
    <div
      class="hidden md:block w-56 h-[317px] bg-right-shadow absolute right-0 top-1/2 -translate-y-1/2 z-20"
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
    certificates: {
      type: Array,
      default: () => {},
    },
  },
}
</script>
