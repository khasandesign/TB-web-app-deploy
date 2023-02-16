import BaseInputTel from './BaseInputTel.vue'

export default {
  title: 'BaseInputTel',
  component: BaseInputTel,
}

export const Default = (arg, { argTypes }) => ({
  components: { BaseInputTel },
  props: Object.keys(argTypes),
  template: `
    <BaseInputTel v-bind="$props" />
  `,
})

export const SmallSize = (arg, { argTypes }) => ({
  components: { BaseInputTel },
  props: Object.keys(argTypes),
  template: `
    <BaseInputTel v-bind="$props" size="small" />
  `,
})

export const LargeSize = (arg, { argTypes }) => ({
  components: { BaseInputTel },
  props: Object.keys(argTypes),
  template: `
    <BaseInputTel v-bind="$props" size="large" />
  `,
})
