<template>
  <transition name="bottom-sheet">
    <div
      v-if="show"
      class="flex flex-col w-screen h-screen fixed inset-0 z-50 bg-[#1A1A1A]"
    >
      <header class="px-4 pt-7 pb-4 flex justify-between">
        <slot name="title">
          <h6 class="h6 font-bold">{{ title }}</h6>
        </slot>
        <BaseButton
          color="gray"
          circle
          size="small"
          icon="close"
          @click="handleClose"
        />
      </header>
      <main class="flex-1 overflow-y-auto">
        <slot />
      </main>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'BaseBottomSheet',
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: undefined,
    },
  },
  watch: {
    show: {
      handler() {
        if (!process.client) {
          return
        }
        if (this.show) {
          document.body.style.overflow = 'hidden'
        } else {
          document.body.style.overflow = null
        }
      },
      immediate: true,
    },
  },
  methods: {
    handleClose() {
      this.$emit('close')
    },
  },
}
</script>

<style>
.bottom-sheet-enter-active,
.bottom-sheet-leave-active {
  will-change: transform, opacity;
  transition: transform 0.3s ease-in-out;
}

.bottom-sheet-enter {
  transform: translateY(100%);
}

.bottom-sheet-leave-to {
  transform: translateY(100%);
}
</style>
