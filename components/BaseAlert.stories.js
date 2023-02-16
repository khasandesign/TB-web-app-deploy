import BaseAlert from './BaseAlert.vue'

export default {
  title: 'BaseAlert',
  component: BaseAlert,
}

export const Default = (arg, { argTypes }) => ({
  components: { BaseAlert },
  props: Object.keys(argTypes),
  template: '<BaseAlert v-bind="$props">Default</BaseAlert>',
})

export const WithLink = (arg, { argTypes }) => ({
  components: { BaseAlert },
  props: Object.keys(argTypes),
  template:
    '<BaseAlert href="https://youtube.com" v-bind="$props">With link</BaseAlert>',
})

export const PrefixIcon = (arg, { argTypes }) => ({
  components: { BaseAlert },
  props: Object.keys(argTypes),
  template:
    '<BaseAlert prefix-icon="face" v-bind="$props">With link</BaseAlert>',
})

export const SuffixIcon = (arg, { argTypes }) => ({
  components: { BaseAlert },
  props: Object.keys(argTypes),
  template:
    '<BaseAlert suffix-icon="face" v-bind="$props">With link</BaseAlert>',
})

export const RedColor = (arg, { argTypes }) => ({
  components: { BaseAlert },
  props: Object.keys(argTypes),
  template: '<BaseAlert color="red" v-bind="$props">With link</BaseAlert>',
})

export const Gray1Color = (arg, { argTypes }) => ({
  components: { BaseAlert },
  props: Object.keys(argTypes),
  template: '<BaseAlert color="gray-1" v-bind="$props">With link</BaseAlert>',
})
