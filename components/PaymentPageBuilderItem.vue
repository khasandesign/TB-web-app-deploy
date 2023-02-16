<template>
  <div class="h-full">
    <div class="background-mask-border">
      <div
        class="background-mask flex flex-col items-center md:block relative h-full bg-cover bg-center"
        :style="{
          backgroundImage: `
          linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.2),
            rgba(0, 0, 0, 0.2)
          ),
          linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%),
          linear-gradient(0deg, rgba(8, 8, 8, 0.3), rgba(8, 8, 8, 0.3)),
          url(${course.thumbnail})`,
        }"
      >
        <div
          class="relative md:absolute max-w-[342px] md:pt-[108px] md:ml-[20%] z-20"
        >
          <!-- Desktop -->
          <p
            class="hidden md:block font-clarendon text-[18px] leading-[24px] md:text-[28px] md:leading-[32px] text-label-primary-dark"
          >
            <span class="inline-block h-px w-4 bg-label-primary-dark mb-2" />
            {{ course.author.profile.name }}
          </p>
          <p
            class="hidden md:block text-[18px] leading-[24px] md:text-[28px] md:leading-[32px] text-label-primary-dark font-bold"
          >
            {{ course.title }}
          </p>
          <!-- Mobile -->
          <nuxt-link :to="localePath('/')">
            <img
              src="@/assets/icons/Logo.svg"
              alt="TopBreyns"
              class="mx-auto mt-6 mb-[50px] md:hidden"
            />
          </nuxt-link>
          <div
            class="flex flex-col items-center md:items-start mb-5 md:mb-0 md:mt-[60px]"
          >
            <p
              v-if="hasDiscount"
              class="inline-block relative text-center md:text-left text-[24px] md:text-[32px] leading-[24px] md:leading-[40px] font-bold md:font-semibold tracking-[-0.5px] text-label-secondary-dark line-through"
            >
              {{ price | formatNumber }}
              <span
                class="absolute top-0 left-full transform translate-x-2 -translate-y-2 caption md:h5"
              >
                {{ $t('uzCurrency') }}
              </span>
            </p>
            <p
              class="inline-block relative text-center md:text-left text-[32px] md:text-[48px] leading-[32px] md:leading-[48px] font-bold md:font-semibold tracking-[-0.5px] text-label-primary-dark mt-2.5 md:mt-3"
            >
              {{ (hasDiscount ? discountPrice : price) | formatNumber }}
              <span
                class="absolute top-0 left-full transform translate-x-2 -translate-y-2 caption md:h5"
              >
                {{ $t('uzCurrency') }}
              </span>
            </p>
          </div>
          <!-- Mobile -->
          <div class="text-center md:hidden mb-8">
            <p
              class="inline-block md:hidden font-clarendon text-[18px] leading-[24px] text-label-primary-dark"
            >
              <span
                class="inline-block md:hidden h-px w-4 bg-label-primary-dark mb-1.5 mr-1.5"
              />
              {{ course.author.profile.name }}
            </p>
            <p
              class="inline md:hidden text-[18px] leading-[24px] text-label-primary-dark font-bold"
            >
              {{ course.title }}
            </p>
          </div>
          <!-- Desktop -->
          <ul class="hidden md:block mt-[93px]">
            <li
              class="flex justify-between py-[13px] border-b border-solid border-gray-5-dark"
            >
              <span class="par-2 text-label-primary-dark">{{
                $t('purchase.access')
              }}</span>
              <span class="par-2 text-label-secondary-dark text-right">
                {{ course.access }}
              </span>
            </li>
            <li
              class="flex justify-between py-[13px] border-b border-solid border-gray-5-dark"
            >
              <span class="par-2 text-label-primary-dark">
                {{ $t('purchase.duration') }}
              </span>
              <span class="par-2 text-label-secondary-dark text-right">
                {{ course.duration }} {{ $t('minuteShort') }}
              </span>
            </li>
            <li
              class="flex justify-between py-[13px] border-b border-solid border-gray-5-dark"
            >
              <span class="par-2 text-label-primary-dark">
                {{ $t('purchase.students') }}
              </span>
              <span class="par-2 text-label-secondary-dark text-right">
                {{ course.students }}+
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaymentPageBuilderItem',
  props: {
    course: {
      type: Object,
      default: undefined,
    },
  },
  computed: {
    hasDiscount() {
      return (
        this.course.specialOffer &&
        this.$dayjs().isSameOrBefore(
          this.$dayjs(this.course.specialOffer.endedAt)
        )
      )
    },
    price() {
      return this.course.price
    },
    discountPrice() {
      return ((100 - this.course.specialOffer.discount) * this.price) / 100
    },
  },
}
</script>

<style lang="scss" scoped>
.background-mask {
  mask-image: url('@/assets/course-images/DanielPink.png');
  mask-repeat: no-repeat;
  mask-size: cover;
  width: 100%;
  height: 100%;

  @media screen and(max-width: 768px) {
    mask-image: none;
    mask-repeat: no-repeat;
    mask-size: auto;
  }
}

.background-mask-border {
  mask-image: url('@/assets/course-images/DanielPink.png');
  mask-repeat: no-repeat;
  mask-size: cover;
  width: 100%;
  height: 100%;
  background-color: rgb(255 255 255 / 30%);

  @media screen and(max-width: 768px) {
    mask-image: none;
    mask-repeat: no-repeat;
    mask-size: auto;
    background-color: transparent;
  }
}
</style>
