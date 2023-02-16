<template>
  <component
    :is="tag"
    :href="href"
    :to="to"
    class="caption h-6 rounded inline-flex items-center px-2 cursor-pointer transition-all duration-300 transform text-label-primary-light dark:text-label-primary-dark"
    :class="{
      'hover:bg-opacity-92 active:bg-opacity-84 active:scale-[0.95]': isLink,
      'bg-primary': color === 'primary',
      'bg-accent-light dark:bg-accent-dark': color === 'accent',
      'bg-red-light dark:bg-red-dark': color === 'red',
      'bg-gray-1-light dark:bg-gray-1-dark': color === 'gray-1',
      'bg-gray-2-light dark:bg-gray-2-dark': color === 'gray-2',
      'bg-gray-3-light dark:bg-gray-3-dark': color === 'gray-3',
      'bg-gray-4-light dark:bg-gray-4-dark': color === 'gray-4',
      'bg-gray-5-light dark:bg-gray-5-dark': color === 'gray-5',
      'bg-gray-6-light dark:bg-gray-6-dark': color === 'gray-6',
      'bg-gray-7-light dark:bg-gray-7-dark': color === 'gray-7',
      'bg-gray-8-light dark:bg-gray-8-dark': color === 'gray-8',
      'border border-solid border-white/[.04]': color.startsWith('gray'),
    }"
  >
    <slot name="prefix-icon">
      <span v-if="prefixIcon" class="material-icons caption mr-1">
        {{ prefixIcon }}
      </span>
    </slot>
    <slot />
    <span v-if="isLink" class="material-icons caption ml-1">open_in_new</span>
    <slot v-else name="suffix-icon">
      <span v-if="suffixIcon" class="material-icons caption ml-1">
        {{ suffixIcon }}
      </span>
    </slot>
  </component>
</template>

<script>
export default {
  name: 'BaseBadge',
  props: {
    href: {
      type: String,
      default: undefined,
    },
    to: {
      type: [String, Object],
      default: undefined,
    },
    prefixIcon: {
      type: String,
      default: undefined,
    },
    suffixIcon: {
      type: String,
      default: undefined,
    },
    color: {
      type: String,
      default: 'gray-4',
    },
  },
  computed: {
    tag() {
      if (this.href) {
        return 'a'
      }
      if (this.to) {
        return 'nuxt-link'
      }

      return 'div'
    },
    isLink() {
      return this.href || this.to
    },
  },
}
</script>
