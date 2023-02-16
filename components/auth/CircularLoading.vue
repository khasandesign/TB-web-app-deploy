<template>
  <svg
    class="auth-circular-loading"
    :style="{ width: `${size}px`, height: `${size}px` }"
  >
    <circle
      class="stroke-gray-600 fill-transparent"
      :stroke-width="strokeWidth"
      :r="radius"
      :cx="size / 2"
      :cy="size / 2"
    />
    <circle
      ref="circle"
      class="stroke-label-primary-dark"
      :stroke-width="strokeWidth"
      fill="transparent"
      :r="radius"
      :cx="size / 2"
      :cy="size / 2"
      :style="{
        strokeDashoffset,
        strokeDasharray: `${circumference} ${circumference}`,
      }"
    />
  </svg>
</template>

<script>
export default {
  name: 'AuthCircularLoading',
  props: {
    size: {
      type: Number,
      default: 24,
    },
    strokeWidth: {
      type: Number,
      default: 1.5,
    },
    percent: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {}
  },
  computed: {
    radius() {
      return this.size / 2 - 1
    },
    circumference() {
      return this.radius * 2 * Math.PI
    },
    strokeDashoffset() {
      return this.circumference - (this.percent / 100) * this.circumference
    },
  },
}
</script>

<style lang="scss" scoped>
.auth-circular-loading {
  circle {
    transition: stroke-dashoffset 0.35s;
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
  }
}
</style>
