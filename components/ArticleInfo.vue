<template>
  <div class="flex items-center text-label-secondary-dark btn-sm font-medium">
    <div class="flex gap-x-[6px] items-center after">
      <img
        :src="info.avatar"
        class="w-5 h-5 rounded-full"
        alt="top-brains-article-author"
      />
      <NuxtLink :to="`/teacher/${info.id}`">
        {{ info.firstName }}
        {{
          info.lastName + info.middleName ? ' ' + info.middleName : ''
        }}&nbsp;&nbsp;·&nbsp;&nbsp;
      </NuxtLink>
    </div>
    <div class="flex gap-x-2 items-center">
      <span class="material-symbols-outlined">visibility</span>
      <h3>{{ info.view }} {{ $t('view') }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticleInfo',
  props: {
    info: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>
