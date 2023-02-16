<template>
  <div>
    <section class="grid grid-cols-5 gap-x-5 md:gap-x-10">
      <button
        class="text-label-primary-dark flex flex-col space-y-2 text-center items-center"
        @click="copy"
      >
        <span
          class="bg-gray-6-dark flex items-center justify-center block rounded-full w-14 h-14 md:w-[68px] md:h-[68px] text-2xl"
        >
          <span class="material-icons">content_copy</span>
        </span>
        <span class="text-base hidden sm:inline">{{ $t('copyURL') }}</span>
      </button>
      <a
        v-for="item in items"
        :key="item.icon"
        :href="item.shareURL"
        target="_blank"
        class="text-label-primary-dark text-center flex flex-col items-center space-y-2"
      >
        <span
          class="inline-flex items-center justify-center block rounded-full w-14 h-14 md:w-[68px] md:h-[68px]"
          :class="item.bgClass"
        >
          <componenet :is="item.icon" />
        </span>
        <span class="hidden sm:inline">
          {{ item.name }}
        </span>
      </a>
    </section>
    <section
      class="flex mt-8 border border-solid border-gray-1-dark bg-gray-1-dark rounded-10px px-5 py-3 text-lg"
    >
      <input
        ref="urlInput"
        readonly
        class="flex-1 bg-transparent outline-none text-label-secondary-dark pr-2"
        :value="url"
      />
      <button
        class="text-label-primary-dark uppercase btn-sm shrink-0"
        @click="copy"
      >
        {{ $t('copy') }}
      </button>
    </section>
  </div>
</template>
<script>
import IconTelegram from '~/components/icons/IconTelegram.vue'
import IconInstagram from '~/components/icons/IconInstagram.vue'
import IconFacebook from '~/components/icons/IconFacebook.vue'
import IconWhatsapp from '~/components/icons/IconWhatsapp.vue'
export default {
  name: 'CourseVideoShare',
  components: { IconTelegram, IconFacebook, IconInstagram, IconWhatsapp },
  props: {
    url: {
      type: String,
      required: true,
    },
  },
  computed: {
    items() {
      return [
        {
          name: 'Telegram',
          icon: 'IconTelegram',
          bgClass: 'bg-[#27A9E8]',
          shareURL: `https://t.me/share/url?url=${this.url}`,
        },
        {
          name: 'Facebook',
          icon: 'IconFacebook',
          bgClass: 'bg-[#3B5997]',
          shareURL: `https://www.facebook.com/sharer.php?u=${this.url}`,
        },
        {
          name: 'Instagram',
          icon: 'IconInstagram',
          bgClass: 'bg-insta-radial',
          shareURL: `https://instagram.com/share?url=${this.url}`,
        },
        {
          name: 'WhatsApp',
          icon: 'IconWhatsapp',
          bgClass: 'bg-whatsapp-linear',
          shareURL: `https://api.whatsapp.com/send?phone={phone_number}&text=${this.url}`,
        },
      ]
    },
  },
  methods: {
    copy() {
      navigator.clipboard.writeText(this.url)
      this.$refs.urlInput.select()
    },
  },
}
</script>
