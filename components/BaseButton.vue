<template>
  <component
    :is="tag"
    :href="href"
    :to="to"
    :class="btnClass"
    class="text-label-primary-dark outline-none active:bg-opacity-84 hover:bg-opacity-92 inline-flex items-center gap-x-2 cursor-pointer disabled:cursor-auto disabled:bg-gray-3-dark"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <span v-if="icon && !loading" class="material-icons">{{ icon }}</span>
    <BaseSpinner v-if="loading" />
    <slot v-else></slot>
  </component>
</template>

<script>
import BaseSpinner from './BaseSpinner.vue'
export default {
  name: 'BaseButton',
  components: { BaseSpinner },
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: 'primary',
    },
    size: {
      type: String,
      default: 'medium',
      validator(value) {
        return ['small', 'medium', 'large'].includes(value)
      },
    },
    icon: {
      type: String,
      default: undefined,
    },
    to: {
      type: [String, Object],
      default: undefined,
    },
    href: {
      type: String,
      default: undefined,
    },
    circle: {
      type: Boolean,
      default: false,
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
      return 'button'
    },
    btnClass() {
      const lg = this.size === 'large'
      const md = this.size === 'medium'
      const sm = this.size === 'small'
      const gray = this.color === 'gray'
      return {
        'bg-primary': this.color === 'primary',
        'bg-bg-primary hover:bg-gray-1-dark': this.color === 'bg-primary',
        'bg-gray-5-dark': gray,
        'bg-red-light dark:bg-red-dark': this.color === 'red',
        'bg-accent-light dark:bg-accent-dark': this.color === 'accent',
        'btn-lg h-[48px]': lg,
        'btn-md h-[40px]': md,
        'btn-sm h-[36px]': sm,
        'py-lg-y px-lg-x': lg && !this.circle,
        'rounded-10px': lg && !this.circle,
        'py-md-y px-md-x': (sm || md) && !this.circle,
        'rounded-8px': (sm || md) && !this.circle,
        'hover:bg-gray-6-dark': gray,
        'active:bg-gray-8-dark': gray,
        'enabled:active:scale-[0.98] enabled:active:origin-center duration-100 ':
          lg,
        'enabled:active:scale-[0.98] enabled:active:origin-center duration-100':
          md,
        'border border-gray-3-dark': gray,
        'rounded-full h-12 w-12': lg && this.circle,
        'rounded-full h-10 w-10': md && this.circle,
        'rounded-full h-9 w-9': sm && this.circle,
        '!flexbox': this.circle,
      }
    },
  },
}
</script>
