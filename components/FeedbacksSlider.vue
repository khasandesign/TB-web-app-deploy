<template>
  <div class="feedbacks-slider" :style="cssVars">
    <main class="feedbacks-slider__main">
      <div
        v-for="(item, index) in feedbacks"
        :key="index"
        class="p-8 bg-white/[.02] border border-solid border-white/[.04] rounded-[10px]"
      >
        <div class="flex gap-x-8">
          <div class="img shrink-[0]">
            <img
              class="w-[60px] h-[60px] rounded-full"
              :src="item.image"
              alt="user"
            />
          </div>
          <div class="">
            <img class="mb-6" src="@/assets/home-img/quote.png" alt="quote" />
            <p
              class="description mb-4 font-normal text-[16px] leading-[22px] h-[66px] text-ellipsis overflow-hidden break-all"
            >
              {{ item.description }}
            </p>
            <h2 class="font-semibold text-[16px] leading-[22px]">
              {{ item.firstName }} {{ item.lastName }}
            </h2>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'FeedbacksSlider',
  props: {
    feedbacks: {
      type: Array,
      default: () => [],
    },
    direction: {
      type: String,
      default: 'left',
      validator(value) {
        return ['left', 'right'].includes(value)
      },
    },
  },
  data() {
    return {
      isMounted: false,
    }
  },
  computed: {
    cssVars() {
      if (!this.isMounted) {
        return {}
      }
      const itemsCount = this.feedbacks.length
      const itemWidth = 464
      const parentWidth = this.$el.offsetWidth
      const gap = 24

      const translateAmount =
        itemsCount * itemWidth + (itemsCount - 1) * gap - parentWidth

      const start = this.direction === 'left' ? 0 : `-${translateAmount}px`
      const end = this.direction === 'left' ? `-${translateAmount}px` : 0

      return {
        '--start': start,
        '--end': end,
        '--animation-duration': `${10 * itemsCount}s`,
        '--items-count': itemsCount,
      }
    },
  },
  mounted() {
    this.isMounted = true
  },
}
</script>

<style lang="scss">
.feedbacks-slider {
  position: relative;
  height: 220px;
  overflow-x: hidden;

  &__main {
    position: absolute;
    display: grid;
    grid-template-columns: repeat(var(--items-count), 464px);
    column-gap: 24px;
    animation: feedbacks-animation var(--animation-duration) both infinite
      alternate linear;

    & > div {
      height: 220px;
    }
  }
}

@keyframes feedbacks-animation {
  from {
    transform: translateX(var(--start));
  }

  to {
    transform: translateX(var(--end));
  }
}
</style>
