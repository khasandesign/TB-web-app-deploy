<template>
  <div class="base-spinner" :style="styles"></div>
</template>

<script>
export default {
  name: 'BaseSpinner',
  props: {
    size: {
      type: Number,
      default: 24,
    },
    borderWidth: {
      type: Number,
      default: 3,
    },
  },
  computed: {
    styles() {
      return {
        '--size': `${this.size}px`,
        '--border-size': `${this.borderWidth}px`,
      }
    },
  },
}
</script>

<style lang="scss">
.base-spinner {
  width: var(--size);
  height: var(--size);
  border: var(--border-size) solid #fff;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
