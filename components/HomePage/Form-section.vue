<template>
  <div
    class="relative pt-6 md:pt-[80px] bg-contain bg-no-repeat bg-top md:!bg-none"
    :style="{ backgroundImage: bgArtMobile }"
  >
    <div
      class="absolute hidden md:flex justify-end -top-5 -z-[1] left-0 w-full"
    >
      <img src="@/assets/home-img/Art.svg" alt="art" />
    </div>
    <div class="mx-auto container">
      <div class="content">
        <img
          class="absolute hidden md:block -bottom-[100px] -z-10 left-0"
          src="@/assets/home-img/c.png"
          alt="art"
        />
        <div>
          <h1
            class="text-[32px] leading-9 md:h1 text-center md:text-start text-label-primary-dark max-w-[810px] font-bold mb-[52px] md:mb-[97px]"
          >
            {{ $t('home.homeTitle.start') }}
            <span class="text-yeseva font-normal">
              {{ $t('home.homeTitle.middle') }}
            </span>
            {{ $t('home.homeTitle.end') }}
          </h1>
          <div
            v-if="$auth.loggedIn"
            class="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-full md:max-w-lg"
          >
            <div v-for="(course, index) in courses" :key="index">
              <div
                class="relative rounded-[12px] p-2.5 bg-white/[.04] border border-solid border-white/[.04]"
              >
                <div
                  class="absolute top-0 left-0 h-full -z-[1] result"
                  :style="`width:${course.result}`"
                ></div>
                <img
                  class="w-full h-[185px] rounded-xl object-cover mb-4"
                  :src="course.thumbnail"
                  alt="course-img"
                />
                <h2
                  class="text-[16px] leading-[22px] text-label-primary-dark mb-[6px] line-clamp-2"
                >
                  {{ index + 1 }}. {{ course.title }}
                </h2>
                <nuxt-link
                  :to="
                    localePath({
                      name: 'courses-courseId-lessons-lessonId',
                      params: { courseId: course.id, lessonId: 1 },
                    })
                  "
                  class="text-[15px] leading-5 text-label-secondary-dark"
                >
                  {{ $t('continue') }}
                </nuxt-link>
              </div>
            </div>
          </div>
          <div v-else class="max-w-full md:max-w-[342px]">
            <AuthSendCodeProvider
              v-slot="{ handleSubmit, loading, phoneNumber, setPhoneNumber }"
            >
              <BaseForm class="mb-10" @submit="handleSubmit">
                <BaseInputTel
                  :value="phoneNumber"
                  name="phoneNumber"
                  rules="required|tel"
                  size="large"
                  color="gray-1"
                  class="mb-4 backdrop-blur-lg"
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
                <img src="@/assets/home-img/fb-icon.png" alt="google" />
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
          </div>

          <div
            class="mt-[40px] md:mt-[100px] text-label-primary-dark max-w-full text-center md:text-left lg md:max-w-[700px]"
          >
            <p
              class="font-normal text-[24px] leading-7 md:text-[32px] md:leading-9 tracking-[.25px] mb-8"
            >
              {{ $t('home.titleTwo') }}
            </p>

            <div
              class="flex justify-center md:justify-start divide-x divide-white/[.1]"
            >
              <section
                class="max-w-[200px] flex flex-col items-center justify-center px-12 py-6"
              >
                <h1
                  class="text-[32px] md:text-[48px] leading-12 font-bold md:mb-3"
                >
                  569
                </h1>
                <p class="btn-sm">{{ $t('home.students') }}</p>
              </section>
              <section
                class="max-w-[200px] flex flex-col items-center justify-center px-12 py-6"
              >
                <h1
                  class="text-[32px] md:text-[48px] leading-12 font-bold md:mb-3"
                >
                  15+
                </h1>
                <p class="btn-sm flex items-center gap-x-2">
                  <span class="shrink-0">
                    {{ $t('home.exp') }}
                  </span>
                  <client-only>
                    <BasePopover>
                      <template #trigger>
                        <button class="text-label-tertiary-dark text-[16px]">
                          <BaseIcon name="help" outlined />
                        </button>
                      </template>
                      <span class="block max-w-sm">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Distinctio mollitia omnis optio quos ratione.
                        Accusamus accusantium alias aliquid architecto
                        consequuntur expedita explicabo fugiat, ipsam numquam
                        odio perferendis quod recusandae, veniam?
                      </span>
                    </BasePopover>
                  </client-only>
                </p>
              </section>
              <section
                class="hidden max-w-[200px] md:block flex flex-col items-center justify-center px-12 py-6"
              >
                <h1 class="text-[48px] leading-12 font-bold mb-3">24/7</h1>
                <p class="btn-sm">{{ $t('collab.support') }}</p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AuthSendCodeProvider from '../auth/AuthSendCodeProvider.vue'
import bgArtMobile from '@/assets/home-img/art-mobile.png'

export default {
  name: 'SectionOne',
  components: { AuthSendCodeProvider },
  props: {
    courses: {
      type: Array,
      default: undefined,
    },
  },
  data() {
    return {
      phone: '',
      bgArtMobile: `url(${bgArtMobile})`,
    }
  },
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Yeseva+One&display=swap');
.text-yeseva {
  font-family: 'Yeseva One', cursive;
}
.result {
  background: linear-gradient(
    270deg,
    rgba(255, 255, 255, 0.04) 0%,
    rgba(255, 255, 255, 0) 100%
  );
}
</style>
