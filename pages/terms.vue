<template>
  <div class="bg-[#080808] text-label-primary-dark">
    <div class="pb-12 md:pb-[100px]">
      <h2 class="h3 mb-4 md:mb-6">{{ $t('terms.service') }}</h2>
      <p class="par-2 text-white/60">
        {{ $t('terms.info') }}
      </p>
      <p class="mt-6 par-2 text-white/60">
        {{ $t('terms.firstBand') }}
      </p>
      <p class="par-2 text-white/60">
        <span class="inline-block mb-1 bg-white/60 h-0.5 w-4 mr-1.5"></span>
        E-mail
        {{ $t('terms.address') }}
      </p>
      <p class="par-2 text-white/60">
        <span class="inline-block mb-1 bg-white/60 h-0.5 w-4 mr-1.5"></span>
        {{ $t('terms.name') }}
      </p>

      <p class="mt-6 par-2 text-white/60">{{ $t('terms.secondBand') }}</p>
      <p class="par-2 text-white/60">
        <span class="inline-block mb-1 bg-white/60 h-0.5 w-4 mr-1.5"></span>
        {{ $t('terms.IpAddress') }}
      </p>
      <p class="par-2 text-white/60">
        <span class="inline-block mb-1 bg-white/60 h-0.5 w-4 mr-1.5"></span
        >{{ $t('terms.collectedData') }}
      </p>

      <!-- second section -->
      <h2 class="h5 mt-8 mb-4 md:mt-14 md:mb-6">{{ $t('terms.thirdBand') }}</h2>
      <p class="par-2 text-white/60">
        {{ $t('terms.info') }}
      </p>

      <p class="mt-6 par-2 text-white/60">
        {{ $t('terms.firstBand') }}
      </p>
      <p class="par-2 text-white/60">
        <span class="inline-block mb-1 bg-white/60 h-0.5 w-4 mr-1.5"></span
        >E-mail
        {{ $t('terms.address') }}
      </p>
      <p class="par-2 text-white/60">
        <span class="inline-block mb-1 bg-white/60 h-0.5 w-4 mr-1.5"></span
        >{{ $t('terms.name') }}
      </p>

      <p class="mt-6 par-2 text-white/60">{{ $t('terms.secondBand') }}</p>
      <p class="par-2 text-white/60">
        <span class="inline-block mb-1 bg-white/60 h-0.5 w-4 mr-1.5"></span
        >{{ $t('terms.IpAddress') }}
      </p>
      <p class="par-2 text-white/60">
        <span class="inline-block mb-1 bg-white/60 h-0.5 w-4 mr-1.5"></span
        >{{ $t('terms.collectedData') }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TermsPage',
  layout: 'infoLayout',
  head() {
    return {
      title: this.$t('terms.service'),
    }
  },
}
</script>
