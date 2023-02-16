<template>
  <transition name="fade">
    <div
      v-if="show"
      class="w-screen h-screen bg-black/90 fixed top-0 left-0 z-50"
      :data-parent="true"
      @click="handleClick"
    >
      <div>
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'BaseModal',
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    document.addEventListener('keydown', (evt) => {
      if (evt.key === 'Escape') {
        this.$emit('close')
      }
    })
  },
  methods: {
    handleClick(evt) {
      const dataParent = Boolean(evt.target.attributes['data-parent']?.value)

      if (dataParent) {
        this.$emit('close')
      }
    },
  },
}
</script>
