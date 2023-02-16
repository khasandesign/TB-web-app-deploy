<template>
  <component
    :is="to ? 'nuxt-link' : 'button'"
    :to="to"
    type="button"
    :class="{
      'py-[13px] px-4 h-12': size === 'large',
      'py-[10px] px-4 h-[42px]': size === 'medium',
    }"
    class="block w-full text-label-primary-dark cursor-pointer enabled:active:bg-gray-4-dark hover:bg-gray-3-dark text-base transition duration-100 flex items-center gap-x-2 disabled:cursor-default disabled:text-label-primary-dark disabled:opacity-30"
    v-bind="$attrs"
    v-on="$listeners"
    @click.native="handleClick"
  >
    <slot></slot>
    <span v-if="icon" class="material-icons text-gray-6-dark">{{ icon }}</span>
  </component>
</template>

<script>
export default {
  name: 'BaseDropdownItem',
  inject: ['closeDropdown'],
  props: {
    icon: {
      type: String,
      default: undefined,
    },
    to: {
      type: [String, Object],
      default: undefined,
    },
  },
  data() {
    return {
      size: this.$parent.size,
    }
  },
  methods: {
    handleClick(e) {
      this.closeDropdown()
      this.$emit('click', e)
    },
  },
}
</script>
