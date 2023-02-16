<template>
  <div>
    <slot name="trigger" />
    <transition name="fade">
      <div
        v-show="visible"
        ref="tooltip"
        role="tooltip"
        class="tooltip rounded-lg dark:bg-bg-secondary dark:text-label-primary-dark px-6 py-4"
      >
        <slot />
        <div id="arrow" data-popper-arrow></div>
      </div>
    </transition>
  </div>
</template>
<script>
import { createPopper } from '@popperjs/core'

export default {
  name: 'BasePopover',
  props: {
    trigger: {
      type: String,
      default: 'hover',
      validator(value) {
        return ['click', 'hover'].includes(value)
      },
    },
    placement: {
      type: String,
      default: 'auto',
      validator(value) {
        return [
          'auto',
          'auto-start',
          'auto-end',
          'top',
          'top-start',
          'top-end',
          'bottom',
          'bottom-start',
          'bottom-end',
          'right',
          'right-start',
          'right-end',
          'left',
          'left-start',
          'left-end',
        ].includes(value)
      },
    },
    popperOptions: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      visible: false,
    }
  },
  watch: {
    placement() {
      this.popper.setOptions({
        placement: this.placement,
      })
      this.popper.update()
    },
    popperOptions: {
      deep: true,
      handler() {
        this.popper.setOptions(this.popperOptions)
        this.popper.update()
      },
    },
  },
  mounted() {
    this.triggerEl = this.$el.childNodes[0]
    this.popper = createPopper(this.triggerEl, this.$refs.tooltip, {
      placement: this.placement,
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 8],
          },
        },
      ],
      ...this.popperOptions,
    })

    if (this.trigger === 'click') {
      this.triggerEl.addEventListener('click', this.toggle)
    }

    if (this.trigger === 'hover') {
      this.triggerEl.addEventListener('mouseenter', this.show)
      this.triggerEl.addEventListener('mouseleave', this.hide)
    }
  },
  methods: {
    toggle() {
      if (this.visible) {
        this.hide()
      } else {
        this.show()
      }
    },
    show() {
      this.visible = true
      // Enable the event listeners
      this.popper.setOptions((options) => ({
        ...options,
        modifiers: [
          ...options.modifiers,
          { name: 'eventListeners', enabled: true },
        ],
      }))

      // Update its position
      this.popper.update()
    },
    hide() {
      this.visible = false
      // Disable the event listeners
      this.popper.setOptions((options) => ({
        ...options,
        modifiers: [
          ...options.modifiers,
          { name: 'eventListeners', enabled: false },
        ],
      }))
    },
  },
}
</script>

<style>
#arrow,
#arrow::before {
  position: absolute;
  width: 8px;
  height: 8px;
  background: inherit;
}

#arrow {
  visibility: hidden;
}

#arrow::before {
  visibility: visible;
  content: '';
  transform: rotate(45deg);
}

.tooltip[data-popper-placement^='top'] > #arrow {
  bottom: -4px;
}

.tooltip[data-popper-placement^='bottom'] > #arrow {
  top: -4px;
}

.tooltip[data-popper-placement^='left'] > #arrow {
  right: -4px;
}

.tooltip[data-popper-placement^='right'] > #arrow {
  left: -4px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
