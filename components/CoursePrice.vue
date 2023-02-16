<template>
  <div class="mx-auto space-y-4 xl:flex xl:space-y-0 xl:space-x-6">
    <section
      class="flex flex-col xl:w-1/2 border border-solid border-gray-3-dark rounded-[15px] bg-gray-3-dark"
    >
      <main
        class="flex-1 pt-8 pt-8 px-[27px] lg:px-[40px] lg:pt-[40px] flex flex-col"
      >
        <header
          class="flex flex-col space-y-3 text-center lg:text-left lg:space-y-0 lg:flex-row justify-between lg:items-start"
        >
          <h4 class="h3">{{ $t('eduPrice') }}</h4>
          <p class="par-2 text-label-primary-dark shrink-0">
            <span class="hidden lg:inline">
              {{ $t('course.term') }}: {{ $t('course.forever') }}
            </span>
            <span class="lg:hidden">
              {{ $t('evermore') }}
            </span>
          </p>
        </header>
        <section
          class="mt-10 flex lg:items-start justify-between lg:space-x-0 lg:flex-col-reverse lg:space-y-3 lg:space-y-reverse"
        >
          <p
            class="text-2xl lg:text-[48px] text-label-primary-dark font-bold inline-flex items-start space-x-1"
          >
            <span>
              {{ (hasDiscount ? discountedPrice : price) | formatNumber(0) }}
            </span>
            <span class="text-sm font-semibold capitalize">{{
              $t('som')
            }}</span>
          </p>
          <p
            v-if="hasDiscount"
            class="text-2xl lg:text-[32px] text-[#606060] font-bold inline-flex items-start space-x-1"
          >
            <span class="line-through">{{ price | formatNumber(0) }}</span>
            <span class="text-xs font-semibold capitalize">
              {{ $t('som') }}
            </span>
          </p>
        </section>
      </main>

      <BaseAlert
        v-if="hasDiscount"
        color="gray-3"
        size="lg"
        justify="center"
        class="mt-[42px] lg:mt-20"
      >
        <div class="flex space-x-4 items-center justify-center">
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 0L21.8936 6.01669L28.5801 3.43769L28.1936 10.5939L35.119 12.4377L30.6 18L35.119 23.5623L28.1936 25.4061L28.5801 32.5623L21.8936 29.9833L18 36L14.1064 29.9833L7.41987 32.5623L7.80639 25.4061L0.880983 23.5623L5.4 18L0.880983 12.4377L7.80639 10.5939L7.41987 3.43769L14.1064 6.01669L18 0Z"
              fill="white"
            />
            <path
              d="M14.5262 18.7149C13.8332 18.7149 13.2662 18.4809 12.8252 18.0129C12.3932 17.5359 12.1772 16.9014 12.1772 16.1094C12.1772 15.3174 12.3932 14.6874 12.8252 14.2194C13.2662 13.7424 13.8332 13.5039 14.5262 13.5039C15.2192 13.5039 15.7817 13.7424 16.2137 14.2194C16.6457 14.6874 16.8617 15.3174 16.8617 16.1094C16.8617 16.9014 16.6457 17.5359 16.2137 18.0129C15.7817 18.4809 15.2192 18.7149 14.5262 18.7149ZM20.1557 13.6119H21.7622L15.3092 23.0619H13.7027L20.1557 13.6119ZM14.5262 17.6079C14.8322 17.6079 15.0707 17.4819 15.2417 17.2299C15.4217 16.9779 15.5117 16.6044 15.5117 16.1094C15.5117 15.6144 15.4217 15.2409 15.2417 14.9889C15.0707 14.7369 14.8322 14.6109 14.5262 14.6109C14.2292 14.6109 13.9907 14.7414 13.8107 15.0024C13.6307 15.2544 13.5407 15.6234 13.5407 16.1094C13.5407 16.5954 13.6307 16.9689 13.8107 17.2299C13.9907 17.4819 14.2292 17.6079 14.5262 17.6079ZM20.9387 23.1699C20.4887 23.1699 20.0837 23.0664 19.7237 22.8594C19.3727 22.6434 19.0982 22.3374 18.9002 21.9414C18.7022 21.5454 18.6032 21.0864 18.6032 20.5644C18.6032 20.0424 18.7022 19.5834 18.9002 19.1874C19.0982 18.7914 19.3727 18.4899 19.7237 18.2829C20.0837 18.0669 20.4887 17.9589 20.9387 17.9589C21.6317 17.9589 22.1942 18.1974 22.6262 18.6744C23.0672 19.1424 23.2877 19.7724 23.2877 20.5644C23.2877 21.3564 23.0672 21.9909 22.6262 22.4679C22.1942 22.9359 21.6317 23.1699 20.9387 23.1699ZM20.9387 22.0629C21.2447 22.0629 21.4832 21.9369 21.6542 21.6849C21.8342 21.4239 21.9242 21.0504 21.9242 20.5644C21.9242 20.0784 21.8342 19.7094 21.6542 19.4574C21.4832 19.1964 21.2447 19.0659 20.9387 19.0659C20.6417 19.0659 20.4032 19.1919 20.2232 19.4439C20.0432 19.6959 19.9532 20.0694 19.9532 20.5644C19.9532 21.0594 20.0432 21.4329 20.2232 21.6849C20.4032 21.9369 20.6417 22.0629 20.9387 22.0629Z"
              fill="#252525"
            />
          </svg>
          <span>{{
            $t('discount', {
              discount: course.specialOffer.discount,
              date: $dayjs(course.specialOffer.endedAt).format('MMMM D'),
            })
          }}</span>
        </div>
      </BaseAlert>
    </section>
    <section
      class="xl:w-1/2 border border-solid border-gray-3-dark rounded-[15px] bg-gray-3-dark text-label-primary-dark pt-[28px] pb-6 lg:pt-24 lg:pb-32 text-center"
    >
      <img :src="authorAvatar" class="w-16 h-16 rounded-full inline-block" />
      <main class="w-10/12 lg:w-[60%] mx-auto">
        <h5 class="h5 mt-[22px] w-[80%] lg:[45%] mx-auto">
          {{ $t('course.seeFullCourseOf', { name: authorName }) }}
        </h5>
        <p class="par-2 mt-4">
          {{ $t('evermoreLong') }}
        </p>
        <BaseButton
          color="primary"
          class="mt-8 w-full lg:w-auto text-center justify-center"
          :to="
            localePath({
              name: 'courses-courseId-purchase',
              params: { courseId: course.id },
            })
          "
        >
          {{ $t('register.continue') }}
        </BaseButton>
      </main>
    </section>
  </div>
</template>

<script>
export default {
  name: 'CoursePrice',
  props: {
    course: {
      type: Object,
      required: true,
    },
  },
  computed: {
    date() {
      const locale = this.$i18n.locale
      this.$dayjs.locale(locale !== 'uz' ? locale : 'uz-latn')
      return this.$dayjs('2022-07-04').format('D MMM')
    },
    authorName() {
      return this.course.author.profile.name
    },
    authorAvatar() {
      return this.course.author.profile.avatar
    },
    price() {
      return this.course.price
    },
    discountedPrice() {
      if (this.course.specialOffer) {
        return (
          ((100 - this.course.specialOffer.discount) * this.course.price) / 100
        )
      }

      return null
    },
    hasDiscount() {
      return this.$dayjs().isSameOrBefore(
        this.$dayjs(this.course.specialOffer.endedAt)
      )
    },
  },
}
</script>
