<template>
  <component
    :is="tag"
    :href="href"
    :to="to"
    class="rounded-[10px] px-6 flex items-center font-normal text-[16px] leading-[22px] transition-all duration-300 transform text-label-primary-light dark:text-label-primary-dark"
    :class="{
      'justify-start': justify === 'start',
      'justify-end': justify === 'end',
      'justify-center': justify === 'center',
      'justify-between': justify === 'between',
      'justify-around': justify === 'around',
      'h-[36px]': size === 'sm',
      'h-14': size === 'md',
      'h-16': size === 'lg',
      'cursor-pointer hover:bg-opacity-[.92] active:bg-opacity-84 active:scale-[0.98]':
        isLink,

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
    <div class="flex-1 flex items-center justify-between">
      <slot name="prefix-icon">
        <span v-if="prefixIcon" class="material-icons mr-2 w-5 h-5">
          {{ prefixIcon }}
        </span>
      </slot>
      <slot />
    </div>
    <span v-if="isLink" class="material-icons">open_in_new</span>
    <slot v-else name="suffix-icon">
      <span v-if="suffixIcon" class="material-icons w-5 h-5">
        {{ suffixIcon }}
      </span>
    </slot>
  </component>
</template>

<script>
export default {
  name: 'BaseAlert',
  components: {},
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
      default: 'primary',
    },
    size: {
      type: String,
      default: 'md',
      validator(value) {
        return ['sm', 'md', 'lg'].includes(value)
      },
    },
    justify: {
      type: String,
      default: 'between',
      validator(value) {
        return ['between', 'center', 'start', 'end', 'around'].includes(value)
      },
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

  mounted() {},
}
</script>

<style lang="scss" scoped></style>
