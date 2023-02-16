<template>
  <BaseModal class="flexbox" :show="show" @close="$emit('close')">
    <div
      class="w-[calc(100vw-20px)] h-auto lg:w-[608px] lg:h-[552px] rounded-[10px] bg-[#1B1B1B] overflow-hidden"
    >
      <div
        class="h-[304px] bg-cover bg-no-repeat relative w-full flex items-end pb-6"
        :style="{
          backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%), url(${
            data.image || data.thumbnail || data.resource
          })`,
        }"
      >
        <div class="flex flex-col items-center text-center w-full">
          <slot></slot>
        </div>
        <button
          class="absolute outline-none flexbox w-12 h-12 bg-gray-2-dark backdrop-blur-[8px] rounded-full top-5 right-5 text-2xl"
          @click="$emit('close')"
        >
          <span class="material-icons">close</span>
        </button>
      </div>
      <div class="h-auto lg:h-[248px] px-5 lg:px-10 pt-4 lg:pt-8 pb-4 lg:pb-0">
        <ul
          class="flex gap-x-2 md:gap-x-3 text-label-primary-dark items-center justify-center lg:justify-evenly gap-4 lg:gap-0 flex-wrap mb-8"
        >
          <li class="text-[22.67px] flexbox flex-col">
            <div
              class="w-14 h-14 md:w-[68px] md:h-[68px] flexbox rounded-full mb-3 cursor-pointer bg-gray-6-dark copy border border-gray-3-dark"
              @click="copy"
            >
              <svg
                width="23"
                height="28"
                viewBox="0 0 23 28"
                class="fill-white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 24.666H2.66667V7.33268C2.66667 6.59935 2.06667 5.99935 1.33333 5.99935C0.6 5.99935 0 6.59935 0 7.33268V24.666C0 26.1327 1.2 27.3327 2.66667 27.3327H16C16.7333 27.3327 17.3333 26.7327 17.3333 25.9993C17.3333 25.266 16.7333 24.666 16 24.666ZM22.6667 19.3327V3.33268C22.6667 1.86602 21.4667 0.666016 20 0.666016H8C6.53333 0.666016 5.33333 1.86602 5.33333 3.33268V19.3327C5.33333 20.7993 6.53333 21.9993 8 21.9993H20C21.4667 21.9993 22.6667 20.7993 22.6667 19.3327ZM20 19.3327H8V3.33268H20V19.3327Z"
                  fill="white"
                />
              </svg>
            </div>
            <span class="text-base hidden sm:inline">{{ $t('copyURL') }}</span>
          </li>
          <li
            v-for="({ bgClass, icon, name, shareURL }, index) in items"
            :key="index"
            class="flexbox flex-col"
          >
            <a
              :href="shareURL"
              target="_blank"
              class="w-14 h-14 md:w-[68px] md:h-[68px] flexbox rounded-full mb-3 cursor-pointer"
              :class="bgClass"
            >
              <component :is="icon" />
            </a>
            <span class="hidden sm:inline">{{ name }}</span>
          </li>
        </ul>
        <div
          class="flex items-center justify-between gap-x-4 py-3 pl-5 pr-4 w-full bg-[#1B1B1B] border border-gray-1-dark rounded-[10px]"
        >
          <input
            ref="urlInput"
            type="text"
            readonly
            :value="showingURL"
            class="bg-transparent h6 text-label-tertiary-dark w-full font-medium"
          />
          <button class="uppercase" @click="copy">{{ $t('copy') }}</button>
        </div>
      </div>
    </div>
  </BaseModal>
</template>

<script>
import IconFacebook from './icons/IconFacebook.vue'
import IconInstagram from './icons/IconInstagram.vue'
import IconTelegram from './icons/IconTelegram.vue'
import IconWhatsapp from './icons/IconWhatsapp.vue'

export default {
  name: 'ShareModal',
  components: { IconFacebook, IconInstagram, IconTelegram, IconWhatsapp },
  props: {
    data: {
      type: Object,
      required: true,
    },
    show: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    const url = this.data.url
    return {
      items: [
        {
          name: 'Telegram',
          icon: 'IconTelegram',
          bgClass: 'bg-[#27A9E8]',
          shareURL: `https://t.me/share/url?url=${url}`,
        },
        {
          name: 'Facebook',
          icon: 'IconFacebook',
          bgClass: 'bg-[#3B5997]',
          shareURL: `https://www.facebook.com/sharer.php?u=${url}`,
        },
        {
          name: 'Instagram',
          icon: 'IconInstagram',
          bgClass: 'bg-insta-radial',
          shareURL: `https://instagram.com/share?url=${url}`,
        },
        {
          name: 'WhatsApp',
          icon: 'IconWhatsapp',
          bgClass: 'bg-whatsapp-linear',
          shareURL: `https://api.whatsapp.com/send?phone={phone_number}&text=${url}`,
        },
      ],
    }
  },
  computed: {
    showingURL() {
      const url = this.data.url || ''
      return url.length > 34 ? url.slice(0, 31) + '...' : url
    },
  },
  methods: {
    copy() {
      navigator.clipboard.writeText(this.data.url)
      this.$refs.urlInput.select()
    },
  },
}
</script>
