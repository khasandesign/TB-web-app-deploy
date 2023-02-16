import BaseButton from './BaseButton.vue'

export default {
  title: 'BaseButton',
  component: BaseButton,
}

export const Default = (arg, { argTypes }) => ({
  components: { BaseButton },
  props: Object.keys(argTypes),
  template: '<BaseButton v-bind="$props">Default</BaseButton>',
})

export const WithIcon = (arg, { argTypes }) => ({
  components: { BaseButton },
  props: Object.keys(argTypes),
  template: '<BaseButton icon="face" v-bind="$props">With icon</BaseButton>',
})

export const LargeButton = (arg, { argTypes }) => ({
  components: { BaseButton },
  props: Object.keys(argTypes),
  template:
    '<BaseButton size="large" v-bind="$props">Large button</BaseButton>',
})

export const SmallButton = (arg, { argTypes }) => ({
  components: { BaseButton },
  props: Object.keys(argTypes),
  template:
    '<BaseButton size="small" v-bind="$props">Small button</BaseButton>',
})

export const AsNuxtLink = (arg, { argTypes }) => ({
  components: { BaseButton },
  props: Object.keys(argTypes),
  template: '<BaseButton to="/" v-bind="$props">Nuxt link</BaseButton>',
})

export const AsRegularLink = (arg, { argTypes }) => ({
  components: { BaseButton },
  props: Object.keys(argTypes),
  template:
    '<BaseButton href="https://youtube.com" color="red" v-bind="$props">Youtube</BaseButton>',
})

export const AccentColor = (arg, { argTypes }) => ({
  components: { BaseButton },
  props: Object.keys(argTypes),
  template:
    '<BaseButton color="accent" v-bind="$props">Button with accent color</BaseButton>',
})
