<template>
  <div class="bg-[#080808] text-label-primary-dark">
    <div
      class="w-[375px] max-w-full fixed bottom-10 left-0 duration-500 ease-in-out transform transition-all"
      :class="isAlert ? 'translate-x-1' : '-translate-x-full'"
    >
      <BaseAlert class="flex-1">
        <span> Спасибо! Мы скоро с вами свяжемся! </span>
        <slot name="suffix-icon">
          <button type="button" @click="isAlert = false">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                fill="white"
                fill-opacity="0.5"
              />
            </svg>
          </button>
        </slot>
      </BaseAlert>
    </div>
    <div
      class="container flex flex-col items-center pt-6 md:pt-20 px-4 md:px-0"
    >
      <section class="w-full lg:w-6/12 mx-auto">
        <h2 class="h3 text-2xl md:text-[42px] md:leading-[52px] md:text-left">
          {{ $t('collab.partnership') }}
        </h2>
        <h2
          class="h3 text-2xl md:text-[42px] md:leading-[52px] md:text-left mb-3 md:mb-4"
        >
          {{ $t('collab.withYou') }}
        </h2>
        <div class="flex items-center">
          <img src="/small-logo.svg" />
          <p class="subheadline ml-1.5 text-label-secondary-dark">
            TopBrains - {{ $t('collab.support') }}
          </p>
        </div>
      </section>
      <section class="hidden md:flex justify-center w-8/12 mx-auto text-center">
        <img
          src="@/assets/img-collab/dudesHandshaking.png"
          alt="Dudes handshaking"
          class="w-full h-auto mt-8"
        />
      </section>
    </div>
    <img
      src="@/assets/img-collab/dudesHandshakingMobile.png"
      alt="Dudes handshaking"
      class="rounded-none mt-6 md:hidden w-full"
    />
    <div
      class="container pt-3 px-4 md:px-0 flex flex-col items-center pb-12 md:pb-20"
    >
      <div class="w-full lg:w-6/12 mx-auto">
        <p class="caption text-label-secondary-dark text-center">
          {{ $t('collab.mainPicCaption') }}
        </p>
        <div class="mt-6 md:mt-10">
          <p class="par-2">
            {{ $t('collab.firstBand') }}
          </p>
        </div>
        <div class="mt-4 md:mt-6">
          <p class="par-2">
            {{ $t('collab.secondBand') }}
            <a href="youtube.com" class="text-primary">
              collaboration@topbrains.com</a
            >
            {{ $t('collab.secondBand2') }}
            <a href="google.com" class="text-primary">@topbrains</a>.
          </p>
        </div>
        <div class="mt-9 md:mt-12">
          <h2 class="h5 mb-3 md:mb-4">{{ $t('collab.thirdBandHeader') }}</h2>
          <p class="par-2">
            {{ $t('collab.thirdBand') }}
          </p>
          <ul class="mt-4 md:mt-6 pl-4 md:pl-6 list-disc">
            <li>{{ $t('collab.thirdBandRequirements1') }}</li>
            <li>{{ $t('collab.thirdBandRequirements2') }}</li>
            <li>{{ $t('collab.thirdBandRequirements3') }}</li>
          </ul>
        </div>
        <div class="mt-9 md:mt-12">
          <h2 class="h5 mb-3 md:mb-4">{{ $t('collab.fourthBandHeader') }}</h2>
          <p class="par-2">
            {{ $t('collab.fourthBand') }}
          </p>
        </div>
        <img
          src="../assets/img-collab/studio.png"
          alt="Basic studio"
          class="mt-6 md:mt-9 mb-3"
        />
        <p class="caption text-label-secondary-dark text-center">
          {{ $t('collab.photoCaption') }}
        </p>
        <img
          src="../assets/img-collab/studio2.png"
          alt="Basic studio"
          class="mt-7 md:mt-8 mb-3"
        />
        <p class="caption text-label-secondary-dark text-center">
          {{ $t('collab.photoCaption2') }}
        </p>
        <div class="mt-8 md:mt-9">
          <p class="par-2">
            {{ $t('collab.fourthBandEnding') }}
          </p>
        </div>
        <div class="mt-9 md:mt-12">
          <h2 class="h5 mb-3 md:mb-4">{{ $t('collab.fifthBandHeader') }}</h2>
          <p class="par-2">
            {{ $t('collab.fifthBand') }}
            <a href="http://zerodollarmovies.com/" class="text-primary"
              >collaboration@topbrains.com</a
            >
            {{ $t('collab.secondBand2') }}
            <a href="http://scr.im/" class="text-primary">@topbrains</a>.
          </p>
        </div>
        <div class="mt-9 md:mt-12">
          <h2 class="h5 mb-3 md:mb-4">{{ $t('collab.sixthBandHeader') }}</h2>
          <p class="par-2">
            {{ $t('collab.sixthBand') }}
          </p>
        </div>
        <div class="mt-9 md:mt-12">
          <h2 class="h5 mb-3 md:mb-4">{{ $t('collab.submit') }}</h2>
          <p class="par-2">
            {{ $t('collab.submitInfo') }}
          </p>
        </div>
        <BaseForm ref="form" @submit="handleSubmit">
          <div
            class="grid grid-cols-1 md:grid-cols-2 grid-rows-4 md:grid-rows-2 mt-9 md:mt-12 gap-3"
          >
            <BaseInput
              v-model="data.name"
              name="name"
              rules="required"
              :placeholder="$t('placeholders.name') + '...'"
            />
            <BaseInput
              v-model="data.activity"
              name="activity"
              rules="required"
              :placeholder="$t('placeholders.activity') + '...'"
            />
            <BaseInputTel
              v-model="data.phone"
              size="large"
              name="phoneNumber"
              rules="required|tel"
            />
            <BaseInput
              v-model="data.age"
              name="age"
              rules="required"
              mask="##"
              :placeholder="$t('placeholders.age') + '...'"
            />
          </div>
          <BaseTextarea
            v-model="data.biography"
            name="biography"
            rules="required"
            rows="5"
            :placeholder="$t('placeholders.autobiography') + '...'"
            class="mt-3"
          />
          <div class="flex justify-center">
            <BaseButton
              type="submit"
              size="large"
              class="w-full md:w-[165px] flex justify-center mt-3"
              :loading="loading"
              >{{ $t('send') }}</BaseButton
            >
          </div>
        </BaseForm>
      </div>

      <div class="flex items-center max-w-[708px] w-full mt-6 md:mt-4">
        <span class="h-px w-full bg-gray-5-dark"></span>
        <p class="inline-block mx-2 text-xs text-gray-8-dark">{{ $t('or') }}</p>
        <span class="h-px w-full bg-gray-5-dark"></span>
      </div>
      <BaseButton
        size="large"
        class="flex justify-center w-full md:w-[275px] mt-6 md:mt-4 mb-12 md:mb-16 bg-[#38a5e0]"
        :href="$store.state.socialNetworks.telegram"
        target="_blank"
      >
        <img src="/telegram.svg" alt="Telegram" />
        {{ $t('viaTG') }}
      </BaseButton>
      <div class="flex items-center max-w-[708px] w-full mt-6 md:mt-4">
        <InfoFooter />
      </div>
      <div class="max-w-[708px] w-full">
        <h2 class="h6 text-base md:text-xl mt-3 md:mt-[15px] mb-5 md:mb-6">
          {{ $t('recomend') }}
        </h2>
        <ArticleCard v-if="rec" :article="rec" />
      </div>
    </div>
  </div>
</template>

<script>
import { morphism } from 'morphism'
import { ARTICLE } from '@/api/article'
import { COLLABORATION } from '@/api/collaboration'
export default {
  name: 'CollaborationPage',
  data() {
    return {
      loading: false,
      isAlert: false,
      rec: null,
      data: {
        name: '',
        activity: '',
        phone: '',
        age: '',
        biography: '',
      },
    }
  },
  head() {
    return {
      title: this.$t('header.collaboration'),
    }
  },
  // created() {
  //   this.getArticle()
  // },
  methods: {
    async getArticle() {
      const response = await this.$axios.get(ARTICLE.LIST.url)
      const articles = morphism(ARTICLE.LIST.schema, response.data.items)
      this.rec = articles[0]
    },
    async handleSubmit() {
      try {
        this.loading = true
        await this.$axios.post(COLLABORATION.POST.url, this.data)
        this.isAlert = true
        this.updateTimer()
        this.data = {
          name: '',
          activity: '',
          phone: '',
          age: '',
          biography: '',
        }
      } catch (e) {
      } finally {
        this.loading = false
      }
    },
    updateTimer() {
      setTimeout(() => {
        this.isAlert = false
      }, 7000)
    },
  },
}
</script>
