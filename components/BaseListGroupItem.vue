<template>
  <li
    class="list-group-item relative bg-bg-primary py-[13px] px-4 flex items-center justify-between hover:bg-white/[.06] active:bg-white/[.12]"
  >
    <div class="flex items-center">
      <span class="mr-2 h-[22px]">
        <slot name="prefix"> </slot>
      </span>
      <div class="flex flex-col">
        <p class="par-2"><slot></slot></p>
        <p v-if="subtitle" class="caption text-white/50 inline-block mt-1">
          {{ subtitle }}
        </p>
      </div>
    </div>

    <span class="flex items-center text-label-tertiary-dark h-[22px]">
      <slot name="suffix"> </slot>
    </span>
    <div
      class="border-bot absolute bottom-0 right-0 block h-px bg-gray-4-dark"
    ></div>
  </li>
</template>
<script>
export default {
  name: 'BaseListGroupItem',
  props: {
    subtitle: {
      type: String,
      default: undefined,
    },
  },
}
</script>
<style lang="scss">
.border-bot {
  width: calc(100% - 16px);
}
.list-group-item .material-icons {
  margin-left: 8px;
}
</style>
