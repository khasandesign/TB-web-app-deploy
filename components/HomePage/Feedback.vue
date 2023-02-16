<template>
  <div class="text-label-primary-dark">
    <div class="container">
      <h1
        class="content h3 leading-7 md:text-[48px] md:leading-12 font-bold mb-12"
      >
        {{ $t('reviews') }}
      </h1>
    </div>

    <div class="md:hidden px-4">
      <div class="relative" :class="inMore ? '' : 'h-[800px] overflow-hidden'">
        <BaseButton
          size="large"
          class="w-[56px] h-[56px] backdrop-blur-lg absolute left-1/2 -translate-x-1/2 z-[2] flex items-center justify-center text-3xl bg-gray-1-dark rounded-full"
          :class="inMore ? 'rotate-[180deg] -bottom-[30px]' : 'bottom-4'"
          @click="inMore = !inMore"
        >
          <BaseIcon name="keyboard_arrow_down" />
        </BaseButton>
        <div
          class="absolute bottom-0 left-0 w-full h-[100px] bg-line"
          :class="inMore ? 'hidden' : 'block'"
        ></div>
        <div v-for="(item, index) in feedbacks" :key="index" class="mb-4">
          <div
            class="p-8 bg-white/[.02] border border-solid border-white/[.04] rounded-10px"
          >
            <div class="flex gap-x-8">
              <div class="img shrink-0">
                <img
                  class="w-12 h-12 rounded-full"
                  :src="item.image"
                  alt="user"
                />
              </div>
              <div class="">
                <img
                  class="mb-6"
                  src="@/assets/home-img/quote.png"
                  alt="quote"
                />
                <p
                  class="mb-4 font-normal text-[16px] leading-[22px] h-[66px] text-ellipsis overflow-hidden break-all"
                >
                  {{ item.description }}
                </p>
                <h2 class="font-semibold text-[16px] leading-[22px]">
                  {{ item.firstName }} {{ item.lastName }}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="feedbacks != null"
      class="hidden container-fluid md:block space-y-6"
    >
      <FeedbacksSlider :feedbacks="feedbacks" />
      <FeedbacksSlider :feedbacks="feedbacks" direction="right" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeedbackBox',
  props: {
    feedbacks: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      inMore: false,
    }
  },
}
</script>

<style lang="scss" scoped>
.description {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
.bg-line {
  background: linear-gradient(
    180deg,
    rgba(8, 8, 8, 0) 0%,
    rgba(8, 8, 8, 0.83) 63.54%,
    #080808 100%
  );
}
</style>
