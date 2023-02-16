<template>
  <component
    :is="tag"
    :to="to"
    :href="href"
    class="flex items-center px-4 py-2 rounded-lg btn-sm transition-colors duration-200 hover:bg-white/10"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <span v-if="icon" class="material-icons mr-2">
      {{ icon }}
    </span>
    <slot />
  </component>
</template>

<script>
export default {
  name: 'BaseLink',
  props: {
    to: {
      type: [String, Object],
      default: undefined,
    },
    href: {
      type: String,
      default: undefined,
    },
    icon: {
      type: String,
      default: undefined,
    },
  },
  computed: {
    tag() {
      if (this.to) {
        return 'nuxt-link'
      }
      return 'a'
    },
  },
}
</script>
