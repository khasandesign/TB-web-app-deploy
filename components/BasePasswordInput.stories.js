import BasePasswordInput from './BasePasswordInput.vue'

export default {
  title: 'BasePasswordInput',
  component: BasePasswordInput,
}

export const Default = (arg, { argTypes }) => ({
  components: { BasePasswordInput },
  props: Object.keys(argTypes),
  template: `
    <BasePasswordInput v-bind="$props" placeholder="*******" />
  `,
})
