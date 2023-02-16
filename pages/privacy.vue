<template>
  <div>
    <div class="mb-12">
      <h1 class="text-label-primary-dark h3 font-bold">
        {{ $t('footer.policy') }}
      </h1>
      <p class="mt-3 text-[15px] leading-5 text-label-secondary-dark mb-8">
        {{ $t('updated') }}: 20.07.2016
      </p>
      <div class="text-[16px] font-normal leading-[22px] text-white/[.6]">
        <p class="mb-5">
          {{ $t('contact.subtitle') }}
        </p>
        <div class="mb-5">
          {{ $t('contact.allowFirst') }}
          <ul>
            <li>— {{ $t('contact.ip') }}</li>
            <li>— {{ $t('contact.name') }}</li>
          </ul>
        </div>
        <div class="mb-5">
          {{ $t('contact.allowSecond') }}
          <ul>
            <li>— {{ $t('contact.ip') }}</li>
            <li>— {{ $t('contact.data') }}</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="mb-12">
      <h1 class="text-label-primary-dark text-[24px] font-bold leading-8 mb-8">
        {{ $t('contact.chapterTwo.title') }}
      </h1>
      <div class="text-[16px] font-normal leading-[22px] text-white/[.6]">
        <p class="mb-5">
          {{ $t('contact.subtitle') }}
        </p>
        <div class="mb-5">
          {{ $t('contact.allowFirst') }}
          <ul>
            <li>— {{ $t('contact.ip') }}</li>
            <li>— {{ $t('contact.name') }}</li>
          </ul>
        </div>
        <div class="mb-5">
          {{ $t('contact.allowSecond') }}
          <ul>
            <li>— {{ $t('contact.ip') }}</li>
            <li>— {{ $t('contact.data') }}</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="">
      <h1 class="text-label-primary-dark text-[24px] font-bold leading-8 mb-8">
        {{ $t('privacy.collectData') }}
      </h1>
      <div class="text-[16px] font-normal leading-[22px] text-white/[.6]">
        <p v-for="item in items" :key="item" class="mb-5">
          {{ $t(`privacy.data[${item}]`) }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PrivacyPage',
  layout: 'infoLayout',
  head() {
    return {
      title: this.$t('terms.privacy'),
    }
  },
  computed: {
    items() {
      return [0, 1, 2]
    },
  },
}
</script>

<style lang="scss" scoped></style>
