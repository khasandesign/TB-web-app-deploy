<template>
  <div
    class="w-full bg-gray-3-dark rounded-10px border border-gray-3-dark flex justify-between"
  >
    <section class="p-5">
      <h3
        class="flex lg:items-center gap-x-1 text-label-secondary-dark font-medium text-[18px]"
      >
        <span class="material-icons"> notes </span>
        <span class="text-[15px]">{{ $t('blogs.article') }}</span>
      </h3>
      <div class="block text-base leading-6 lg:h6 mb-4 font-bold">
        <NuxtLink
          :to="localePath({ name: 'articles-id', params: { id: article.id } })"
          :title="article.title"
          class="line-clamp-2"
        >
          {{ article.title }}
        </NuxtLink>
      </div>
      <div
        class="flex gap-x-2 text-label-secondary-dark font-medium text-[15px] leading-5"
      >
        <span class="material-symbols-outlined">visibility</span>
        <span>{{ article.view }} {{ $t('view') }}</span>
      </div>
    </section>
    <section
      class="shrink-0 p-2.5 w-[68px] h-[68px] md:p-3 md:w-[30%] md:h-full"
    >
      <img
        :src="article.image"
        class="block rounded-md w-full h-full object-cover"
        :alt="article.title"
      />
    </section>
  </div>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
}
</script>
