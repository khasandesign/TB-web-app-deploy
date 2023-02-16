<template>
  <div>
    <div class="mb-12">
      <h1 class="text-label-primary-dark h3 font-bold">
        {{ $t('contacts') }}
      </h1>
      <div
        class="mt-4 md:mt-6 text-[16px] font-normal leading-[22px] text-white/[.6]"
      >
        <div class="mb-5">
          {{ $t('contact.subtitle') }}
        </div>
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
      <h1 class="text-label-primary-dark text-[24px] font-bold leading-8">
        {{ $t('contact.chapterTwo.title') }}
      </h1>
      <div
        class="mt-4 md:mt-6 text-[16px] font-normal leading-[22px] text-white/[.6]"
      >
        <div class="mb-5">
          {{ $t('contact.subtitle') }}
        </div>
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
  </div>
</template>

<script>
export default {
  name: 'ContactsPage',
  layout: 'infoLayout',
  head() {
    return {
      title: this.$t('contacts'),
    }
  },
}
</script>

<style lang="scss" scoped></style>
