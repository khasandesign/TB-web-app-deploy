<template>
  <div
    class="dark:text-label-primary-dark h-[calc(100vh_-_72px)] md:h-[calc(100vh_-_80px)] flex flex-col items-center justify-center"
  >
    <h1 class="h2">
      {{ title }}
    </h1>
    <i18n
      v-if="error.statusCode === 404"
      path="pageNotFoundDesc"
      tag="p"
      class="par-1 mt-4"
    >
      <template #link>
        <nuxt-link :to="localePath('/')" class="underline lowercase">
          {{ $t('homepage') }}
        </nuxt-link>
      </template>
    </i18n>
  </div>
</template>

<script>
export default {
  name: 'ErrorPage',
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
  computed: {
    title() {
      if (this.error.statusCode === 404) {
        return this.$t('pageNotFoundTitle')
      }

      return this.$t('internalServerError')
    },
  },
}
</script>
