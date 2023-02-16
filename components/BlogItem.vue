<template>
  <li
    class="bg-gray-3-dark flex justify-between max-w-[830px] mb-4 md:mb-6 rounded-10px border border-solid border-solid border-[#ffffff0a]"
  >
    <div
      class="pt-5 pl-5 pb-[18px] md:pb-[50px] max-w-[235px] md:max-w-[480px]"
    >
      <div class="flex items-center justify-start">
        <span class="material-icons mr-1 text-label-secondary-dark">
          notes
        </span>
        <p class="subheadline text-label-secondary-dark">
          {{ $t('blogs.article') }}
        </p>
      </div>
      <h2
        class="h4 md:max-w-[479px] text-[16px] md:text-[32px] leading-6 md:leading-10 mt-2.5 mb-3 md:mb-5 line-clamp-2"
      >
        {{ item.title }}
      </h2>
      <div class="flex items-center">
        <span
          class="material-symbols-outlined text-label-secondary-dark h-[18px] md:h-5 w-[18px] md:w-5 mb-[6px] md:mb-[5px]"
          >visibility</span
        >
        <p class="subheadline text-label-secondary-dark ml-[10px] md:ml-[10px]">
          {{ item.view }} {{ $t('blogs.views') }}
        </p>
      </div>
    </div>
    <div class="p-3 md:p-2.5">
      <img
        :src="item.image"
        class="ml-2 md:ml-[70px] w-[68px] h-[68px] md:w-[251px] md:h-[200px] object-cover rounded-md border border-solid border-gray-5-dark"
      />
    </div>
  </li>
</template>

<script>
export default {
  name: 'BlogItem',
  props: {
    item: { type: Object, default: undefined },
  },
}
</script>
