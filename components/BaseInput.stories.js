import BaseInput from './BaseInput.vue'

export default {
  title: 'BaseInput',
  component: BaseInput,
}

export const Default = (arg, { argTypes }) => ({
  components: { BaseInput },
  props: Object.keys(argTypes),
  template: `
    <BaseInput v-bind="$props" placeholder="Default input" />
  `,
})

export const SmallSize = (arg, { argTypes }) => ({
  components: { BaseInput },
  props: Object.keys(argTypes),
  template: `
    <BaseInput v-bind="$props" size="small" placeholder="Small input" />
  `,
})

export const PrefixIcon = (arg, { argTypes }) => ({
  components: { BaseInput },
  props: Object.keys(argTypes),
  template: `
    <BaseInput v-bind="$props" prefix-icon="credit_card" placeholder="With prefix icon" />
  `,
})

export const SuffixIcon = (arg, { argTypes }) => ({
  components: { BaseInput },
  props: Object.keys(argTypes),
  template: `
    <BaseInput v-bind="$props" suffix-icon="credit_card" placeholder="With suffix icon" />
  `,
})

export const Masked = (arg, { argTypes }) => ({
  components: { BaseInput },
  props: Object.keys(argTypes),
  template: `
    <BaseInput 
      v-bind="$props" 
      prefix-icon="credit_card"
      suffix-icon="attach_money"
      placeholder="#### #### #### ####"
      mask="#### #### #### ####" />
  `,
})

export const Validation = (arg, { argTypes }) => ({
  components: { BaseInput },
  props: Object.keys(argTypes),
  template: `
    <BaseInput 
      v-bind="$props"
      name="name"
      rules="required|min:6" 
    />
  `,
})
