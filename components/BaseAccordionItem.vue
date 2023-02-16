<template>
  <div
    class="accordion-item select-none border-b border-solid dark:border-[hsla(0,0%,100%,.1)] transition-all duration-300 text-label-primary-light dark:text-label-primary-dark"
    :class="{ 'pb-6': isActive }"
  >
    <div
      class="group w-full text-lg h-16 cursor-pointer flex items-center justify-between"
      @click="handleClick"
    >
      <div
        class="transform transition-transform duration-200 group-active:scale-[0.98] font-semibold"
      >
        <slot name="header">
          {{ header }}
        </slot>
      </div>
      <div class="text-[28px]">
        <span
          class="material-icons transform transition-transform duration-300"
          :class="{ 'rotate-180': isActive }"
        >
          expand_more
        </span>
      </div>
    </div>

    <transition
      name="accordion"
      @enter="start"
      @after-enter="end"
      @before-leave="start"
      @after-leave="end"
    >
      <div v-show="isActive" class="text-base">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'BaseAccordionItem',
  props: {
    header: {
      type: String,
      default: '',
    },
    name: {
      type: [String, Number],
      required: true,
    },
  },
  data() {
    return {
      index: null,
      isActive: false,
    }
  },
  methods: {
    handleClick() {
      this.$emit('toggle')
    },
    start(el) {
      el.style.height = el.scrollHeight + 'px'
    },
    end(el) {
      el.style.height = ''
    },
  },
}
</script>

<style lang="scss" scoped>
.accordion-item {
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    pointer-events: none;
    width: 0;
    height: 0;
    background: hsla(0, 0%, 100%, 0.04);
    filter: blur(80px);
    transition: 0.1s ease-in-out;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
  }

  &:active::before {
    width: 800px;
    height: 800px;
  }
}

.accordion-enter-active,
.accordion-leave-active {
  will-change: height, opacity;
  transition: height 0.3s ease, opacity 0.3s ease;
  overflow: hidden;
}

.accordion-enter,
.accordion-leave-to {
  height: 0 !important;
  opacity: 0;
}
</style>
