import BaseCheckbox from './BaseCheckbox.vue'

export default {
  title: 'BaseCheckbox',
  component: BaseCheckbox,
}

export const Default = (arg, { argTypes }) => ({
  components: { BaseCheckbox },
  props: Object.keys(argTypes),
  template: '<BaseCheckbox v-bind="$props" />',
})

export const Labeled = (arg, { argTypes }) => ({
  components: { BaseCheckbox },
  props: Object.keys(argTypes),
  template: '<BaseCheckbox label="Basic label" v-bind="$props" />',
})

export const LabelPositionedRight = (arg, { argTypes }) => ({
  components: { BaseCheckbox },
  props: Object.keys(argTypes),
  template:
    '<BaseCheckbox label="Basic label" label-position="right" v-bind="$props" />',
})
