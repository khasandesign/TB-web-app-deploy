<template>
  <component
    :is="tag"
    :to="to"
    :href="href"
    class="caption cursor-pointer font-medium"
    :class="[
      isActive ? 'text-label-primary-dark' : 'text-label-secondary-dark',
    ]"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: 'BaseBreadcrumbItem',
  props: {
    to: {
      type: [String, Object],
      default: undefined,
    },
    href: {
      type: String,
      default: undefined,
    },
  },
  computed: {
    tag() {
      if (this.to) {
        return 'nuxt-link'
      }
      if (this.href) {
        return 'a'
      }

      return 'div'
    },
    isActive() {
      return this.$route.path === this.to
    },
  },
}
</script>
