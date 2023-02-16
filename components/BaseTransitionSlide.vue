<template>
  <transition
    enter-active-class="will-change-transform transition-transform duration-300"
    leave-active-class="will-change-transform transition-transform duration-300"
    :enter-class="transitionClass"
    :leave-to-class="transitionClass"
  >
    <slot />
  </transition>
</template>

<script>
export default {
  name: 'BaseTransitionSlide',
  props: {
    direction: {
      type: String,
      default: 'left',
      validator(value) {
        return ['left', 'top', 'right', 'bottom'].includes(value)
      },
    },
  },
  computed: {
    transitionClass() {
      switch (this.direction) {
        case 'left':
          return '-translate-x-full'
        case 'top':
          return '-translate-y-full'
        case 'bottom':
          return 'translate-y-full'
        case 'right':
          return 'translate-x-full'
        default:
          return 'translate-x-full'
      }
    },
  },
}
</script>
