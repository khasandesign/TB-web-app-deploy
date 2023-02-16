<template>
  <div>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'BaseAccordion',
  props: {
    active: {
      type: String,
      default: undefined,
    },
    defaultFirstActive: {
      type: Boolean,
      default: false,
    },
    accordion: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: 'md',
      validator(value) {
        return ['sm', 'md', 'lg'].includes(value)
      },
    },
  },
  data() {
    return {
      currentActive: undefined,
    }
  },
  mounted() {
    if (
      !this.currentActive &&
      this.$children.length > 0 &&
      this.defaultFirstActive
    ) {
      this.currentActive = this.accordion
        ? this.$children[0].name
        : [this.$children[0].name]
    }
    if (!this.currentActive && !this.accordion) {
      this.currentActive = []
    }

    this.setIsActiveOnChildren(this.currentActive)

    this.$children.forEach((child) => {
      child.$on('toggle', () => {
        this.toggleActive(child.name)
        this.setIsActiveOnChildren(this.currentActive)
      })
    })
  },

  methods: {
    toggleActive(name) {
      if (this.accordion) {
        if (this.currentActive === name) {
          this.currentActive = undefined
        } else {
          this.currentActive = name
        }
      } else if (this.currentActive.includes(name)) {
        this.currentActive = this.currentActive.filter((item) => item !== name)
      } else {
        this.currentActive.push(name)
      }
      this.$emit('input:active', this.currentActive)
    },
    setIsActiveOnChildren(name) {
      this.$children.forEach((child) => {
        if (Array.isArray(name)) {
          child.isActive = name.includes(child.name)
        } else {
          child.isActive = child.name === name
        }
      })
    },
  },
}
</script>
