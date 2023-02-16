<template>
  <div
    class="flex flex-col-reverse justify-end md:grid md:grid-cols-[45%_55%] min-h-screen"
  >
    <div class="md:flex md:justify-end md:h-full">
      <div class="md:max-w-[342px] md:pt-[108px] h-full">
        <div class="py-6 px-4 md:py-0 md:px-0">
          <nuxt-link :to="localePath('/')">
            <img
              src="@/assets/icons/Logo.svg"
              alt="Logo"
              class="hidden md:block"
            />
          </nuxt-link>
          <div class="hidden md:flex items-center mt-3">
            <NuxtLink
              :to="
                localePath({
                  name: 'courses-courseId',
                  params: { courseId: $route.params.courseId },
                })
              "
              class="caption hover:underline underline-offset-2 text-label-secondary-dark"
            >
              {{ $t('purchase.course') }} {{ course.authorName }}
            </NuxtLink>
            <span class="material-icons mx-3 text-label-secondary-dark">
              chevron_right
            </span>
            <NuxtLink
              :to="localePath(`/courses/${$route.params.courseId}/purchase`)"
              class="caption hover:underline underline-offset-2"
              :class="breadcrumbPayment"
              >{{ $t('purchase.payment') }}
            </NuxtLink>
            <span
              class="material-icons mx-3 text-label-secondary-dark"
              :class="breadcrumbChevron"
            >
              chevron_right
            </span>
            <NuxtLink
              :to="
                localePath({
                  name: 'courses-courseId-purchase',
                  params: { courseId: $route.params.courseId },
                  query: { payment: 'uzcard' },
                })
              "
              class="caption hover:underline underline-offset-2 text-label-primary-dark"
              :class="breadcrumbUzcard"
            >
              Uzcard
            </NuxtLink>
            <NuxtLink
              :to="
                localePath({
                  name: 'courses-courseId-purchase',
                  params: { courseId: $route.params.courseId },
                  query: { payment: 'payme' },
                })
              "
              class="caption hover:underline underline-offset-2 text-label-primary-dark"
              :class="breadcrumbPayme"
              >Payme
            </NuxtLink>
          </div>
          <div class="mt-0 md:mt-10">
            <p class="par-1 font-semibold mb-2 text-center md:text-left">
              {{ $t('purchase.paymentMethod') }}
            </p>
            <p
              class="caption text-label-secondary-dark text-center md:text-left"
            >
              {{ $t('purchase.paymentMethodInfo') }}
              <nuxt-link
                :to="localePath('contacts')"
                class="text-label-primary-dark"
              >
                {{ $t('purchase.paymentMethodInfoLink') }}
              </nuxt-link>
            </p>
            <PaymentPageCardList v-if="!$route.query.payment" />
            <PaymentPageCardInput
              v-if="
                $route.query.payment === 'uzcard' ||
                $route.query.payment === 'payme'
              "
            />
          </div>
          <div
            class="border border-solid border-gray-4-dark rounded-10px mt-8 px-3.5 pt-5 pb-6"
          >
            <p class="caption text-label-tertiary-dark text-center">
              {{ $t('purchase.masterVisaInfo') }}
            </p>
            <br />
            <p class="caption text-label-tertiary-dark text-center">
              {{ $t('purchase.paymentDetails') }}
            </p>
            <div class="mt-5 text-label-tertiary-dark text-center">
              <nuxt-link
                :to="localePath('terms')"
                class="caption underline underline-offset-2"
              >
                {{ $t('terms.service') }}
              </nuxt-link>
              <p class="inline caption">{{ $t('and') }}</p>
              <nuxt-link
                :to="localePath('privacy')"
                class="caption underline underline-offset-2"
              >
                {{ $t('purchase.privacyPolicy') }}
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <PaymentPageBuilderItem :course="course" />
  </div>
</template>
<script>
export default {
  name: 'PurchasePageBuilder',
  props: {
    course: {
      type: Object,
      required: true,
    },
  },
  computed: {
    breadcrumbPayment() {
      return !this.$route.query.payment
        ? 'text-label-primary-dark'
        : 'text-label-secondary-dark'
    },
    breadcrumbUzcard() {
      return this.$route.query.payment === 'uzcard'
        ? 'text-label-primary-dark'
        : 'hidden'
    },
    breadcrumbPayme() {
      return this.$route.query.payment === 'payme'
        ? 'text-label-primary-dark'
        : 'hidden'
    },
    breadcrumbChevron() {
      return this.$route.query.payment ? 'inline' : 'hidden'
    },
  },
}
</script>
