<script>
export default {
  name: 'BaseTabItem',
  props: {
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      default: undefined,
    },
    icon: {
      type: String,
      default: undefined,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isActive: false,
    }
  },
}
</script>

<template>
  <div v-show="isActive" class="p-4">
    <slot />
  </div>
</template>
