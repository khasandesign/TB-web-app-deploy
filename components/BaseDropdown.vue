<template>
  <div
    v-click-outside="closeDropdown"
    class="flex items-center justify-center relative"
  >
    <slot name="trigger">{{ text }}</slot>
    <Transition name="fade">
      <div
        v-if="show"
        :class="listClass"
        class="bg-[#191919] border border-gray-5-dark rounded-10px absolute top-[125%] first:rounded-t-10px last:rounded-b-10px pb-3 z-50"
      >
        <slot :size="size"></slot>
      </div>
    </Transition>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside'

export default {
  name: 'BaseDropdown',
  directives: {
    ClickOutside,
  },
  provide() {
    return { closeDropdown: this.closeDropdown }
  },
  props: {
    size: {
      type: String,
      default: 'medium',
    },
    text: {
      type: String,
      default: 'Button',
    },
    placement: {
      type: String,
      default: 'right',
      validator(value) {
        return ['left', 'right'].includes(value)
      },
    },
  },

  data() {
    return {
      show: false,
    }
  },
  computed: {
    listClass() {
      return {
        'w-64': this.size === 'medium',
        'w-[296px]': this.size === 'large',
        'right-0': this.placement === 'left',
        'left-0': this.placement === 'right',
      }
    },
  },
  mounted() {
    const trigger = this.$el.childNodes[0]
    trigger.addEventListener('click', this.toggleShow)
  },
  methods: {
    toggleShow() {
      this.show = !this.show
    },
    closeDropdown() {
      this.show = false
    },
  },
}
</script>
