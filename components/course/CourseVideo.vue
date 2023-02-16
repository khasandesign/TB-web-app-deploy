<template>
  <div class="container-fluid relative" v-bind="$attrs" v-on="$listeners">
    <video
      id="video"
      :src="course.resource"
      class="w-full h-full object-cover"
      autoplay
      controls
      muted
      @ended="onVideoEnd"
    ></video>
    <section
      v-if="isVideoEnded"
      class="w-full absolute top-0 left-0 bg-black/[.6] backdrop-blur-xl h-screen flex justify-center items-center"
    >
      <div class="container">
        <div
          class="max-w-full mx-auto px-6"
          :class="{
            'md:max-w-[342px]': !$auth.loggedIn,
            'md:max-w-[528px]': $auth.loggedIn,
          }"
        >
          <!-- If authorized, but not purchased-->
          <section v-if="$auth.loggedIn && !isPurchased">
            <div class="flex items-center justify-center">
              <div
                class="flex flex-col items-center justify-center max-w-[323px] md:max-w-[464px]"
              >
                <img
                  :src="course.author.profile.avatar"
                  class="max-w-[72px] md:max-w-[112px] max-h-[72px] md:max-h-[112px] rounded-full"
                />
                <h2
                  class="h5 text-center md:text-[32px] md:leading-9 text-label-primary-dark mt-3 md:mt-8 mb-3 md:mb-10"
                >
                  {{
                    $t('course.seeFullCourseOf', {
                      name: course.author.profile.name,
                    })
                  }}
                </h2>
                <p
                  class="par-1 text-label-primary-dark text-center mb-10 md:mb-0"
                >
                  {{ $t('course.purchaseDescription') }}
                </p>
                <div class="hidden md:block md:my-10">
                  <p
                    v-if="hasDiscount"
                    class="relative text-center md:text-[32px] md:leading-[40px] md:font-semibold tracking-[-0.5px] text-label-secondary-dark line-through"
                  >
                    {{ price | formatNumber }}
                    <span
                      class="absolute md:top-[-3px] right-[-35px] md:text-[20px] md:leading-[20px] tracking-[0.15px]"
                      >{{ $t('uzCurrency') }}</span
                    >
                  </p>
                  <p
                    class="relative text-center md:text-[48px] md:leading-[48px] md:font-semibold tracking-[-0.5px] text-label-primary-dark mt-2.5 md:mt-3"
                  >
                    {{ (hasDiscount ? discountPrice : price) | formatNumber }}
                    <span
                      class="absolute top-[-3px] right-[-60px] md:text-[20px] md:leading-[20px] tracking-[0.15px]"
                      >{{ $t('uzCurrency') }}</span
                    >
                  </p>
                </div>
                <BaseButton>
                  <nuxt-link
                    :to="
                      localePath({
                        name: 'courses-courseId-purchase',
                        params: { courseId: course.id },
                      })
                    "
                  >
                    {{ $t('register.continue') }}</nuxt-link
                  >
                </BaseButton>
                <BaseButton class="md:hidden bg-transparent mt-3">{{
                  $t('later')
                }}</BaseButton>
              </div>
            </div>
          </section>
          <!-- If authorized and purchased -->
          <section v-else-if="$auth.loggedIn">
            <CourseVideoShare :url="shareUrl" />
          </section>
          <!-- If not authorized-->
          <section v-else>
            <div class="text-center text-label-primary-dark">
              <h2 class="font-bold text-[32px] leading-9 mb-5">
                {{
                  $t('course.seeFullCourseOf', {
                    name: course.author.profile.name,
                  })
                }}
              </h2>
              <p class="font-normal text-[18px] leading-6 mb-6">
                {{ $t('course.purchaseDescription') }}
              </p>
            </div>
            <AuthSendCodeProvider
              v-slot="{ phoneNumber, setPhoneNumber, loading, handleSubmit }"
            >
              <BaseForm class="mb-10" @submit="handleSubmit">
                <BaseInputTel
                  v-focus
                  class="mb-4"
                  :value="phoneNumber"
                  name="phoneNumber"
                  rules="required|tel"
                  size="large"
                  @input="setPhoneNumber"
                />
                <BaseButton
                  type="submit"
                  :loading="loading"
                  class="w-full justify-center"
                  size="large"
                >
                  {{ $t('footer.join') }}
                </BaseButton>
              </BaseForm>
            </AuthSendCodeProvider>
            <div class="flex gap-x-3 mb-6">
              <BaseButton
                size="large"
                class="bg-white text-black/80 w-full flex justify-center items-center mb-1.5"
              >
                <img src="@/assets/home-img/google-icon.png" alt="google" />
                Google
              </BaseButton>
              <BaseButton
                size="large"
                class="bg-[#2E4F8B] text-label-primary-dark w-full flex justify-center items-center mb-1.5"
              >
                <img src="@/assets/home-img/fb-icon.png" alt="facebook" />
                Facebook
              </BaseButton>
            </div>
            <i18n
              path="terms.termsAndPrivacy"
              tag="p"
              class="text-center text-[13px] font-normal text-label-tertiary-dark leading-4 tracking-[.4px]"
            >
              <template #terms>
                <nuxt-link :to="localePath('terms')" class="underline">
                  {{ $t('terms.service') }}
                </nuxt-link>
              </template>
              <template #privacy>
                <nuxt-link :to="localePath('privacy')" class="underline">
                  {{ $t('terms.privacy') }}
                </nuxt-link>
              </template>
            </i18n>
          </section>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AuthSendCodeProvider from '@/components/auth/AuthSendCodeProvider.vue'
import CourseVideoShare from '@/components/course/CourseVideoShare.vue'

export default {
  name: 'CourseVideo',
  components: { AuthSendCodeProvider, CourseVideoShare },
  props: {
    course: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isVideoEnded: false,
    }
  },
  computed: {
    shareUrl() {
      return `${this.$store.state.ui.domain}/courses/${this.course.id}`
    },
    isPurchased() {
      return this.course.purchased
    },
    price() {
      return this.course.price
    },
    discountPrice() {
      if (this.course.specialOffer) {
        return ((100 - this.course.specialOffer.discount) * this.price) / 100
      }

      return null
    },
    hasDiscount() {
      return (
        this.course.specialOffer?.endedAt &&
        this.$dayjs().isSameOrBefore(
          this.$dayjs(this.course.specialOffer.endedAt)
        )
      )
    },
  },
  methods: {
    onVideoEnd() {
      this.isVideoEnded = true
    },
  },
}
</script>
