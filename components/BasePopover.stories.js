import BasePopover from './BasePopover.vue'

export default {
  title: 'BasePopover',
  component: BasePopover,
}

export const TriggerClick = (arg, { argTypes }) => ({
  components: { BasePopover },
  props: Object.keys(argTypes),
  template: `
    <BasePopover trigger="click" v-bind="$props">
      <template #trigger>
        <button class="dark:text-label-primary-dark">Click to see popover</button>
      </template>
      <div>Auto positioned popover</div>
    </BasePopover>
  `,
})

export const TriggerHover = (arg, { argTypes }) => ({
  components: { BasePopover },
  props: Object.keys(argTypes),
  template: `
    <BasePopover trigger="hover" placement="right" v-bind="$props">
      <template #trigger>
        <button class="dark:text-label-primary-dark">Hover to see popover</button>
      </template>
      <div>Right positioned popover</div>
    </BasePopover>
  `,
})
