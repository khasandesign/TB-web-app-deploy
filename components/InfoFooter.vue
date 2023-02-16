<template>
  <div
    class="flex flex-col md:flex-row items-center md:items-start justify-between border-b border-solid border-gray-5-dark w-full pb-10 md:pb-6"
  >
    <div class="flex items-center mb-6 md:mb-0">
      <img src="../static/small-logo.svg" />
      <p class="subheadline ml-1.5 text-label-secondary-dark">
        TopBreyns - {{ $t('collab.support') }}
      </p>
    </div>
    <div class="flex items-center">
      <div
        class="flex items-center justify-center w-12 h-12 rounded-full bg-[#ffffff1a] mr-2"
      >
        <img src="../assets/icons/Share.svg" />
      </div>
      <div
        class="flex items-center justify-center w-12 h-12 rounded-full bg-[#ffffff1a] ml-2"
      >
        <img src="../assets/icons/Bookmark.svg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfoFooter',
}
</script>
