<template>
  <span :class="[outlined ? 'material-symbols-outlined' : 'material-icons']">
    {{ name }}
  </span>
</template>

<script>
export default {
  name: 'BaseIcon',
  props: {
    outlined: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      required: true,
    },
  },
}
</script>
