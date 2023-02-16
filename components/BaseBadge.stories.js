import BaseBadge from './BaseBadge.vue'

export default {
  title: 'BaseBadge',
  component: BaseBadge,
}

export const Default = (arg, { argTypes }) => ({
  components: { BaseBadge },
  props: Object.keys(argTypes),
  template: '<BaseBadge v-bind="$props">Default</BaseBadge>',
})

export const WithLink = (arg, { argTypes }) => ({
  components: { BaseBadge },
  props: Object.keys(argTypes),
  template:
    '<BaseBadge href="https://youtube.com" v-bind="$props">Linked badge</BaseBadge>',
})

export const WithIcon = (arg, { argTypes }) => ({
  components: { BaseBadge },
  props: Object.keys(argTypes),
  template:
    '<BaseBadge prefix-icon="face" v-bind="$props">Badge with icon</BaseBadge>',
})

export const PrimaryColor = (arg, { argTypes }) => ({
  components: { BaseBadge },
  props: Object.keys(argTypes),
  template:
    '<BaseBadge color="primary" v-bind="$props">Badge with primary color</BaseBadge>',
})

export const RedColor = (arg, { argTypes }) => ({
  components: { BaseBadge },
  props: Object.keys(argTypes),
  template:
    '<BaseBadge color="red" v-bind="$props">Badge with red color</BaseBadge>',
})

export const AccentColor = (arg, { argTypes }) => ({
  components: { BaseBadge },
  props: Object.keys(argTypes),
  template:
    '<BaseBadge color="accent" v-bind="$props">Badge with accent color</BaseBadge>',
})
