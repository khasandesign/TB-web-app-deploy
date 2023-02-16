import BaseDropdown from './BaseDropdown.vue'

export default {
  title: 'BaseDropdown',
  component: BaseDropdown,
}

export const Default = (arg, { argTypes }) => ({
  components: { BaseDropdown },
  props: Object.keys(argTypes),
  template: `
    <BaseDropdown text="Default" v-bind="$props">
      <BaseDropdownItem>Dropdown item #1</BaseDropdownItem>
      <BaseDropdownItem icon="check">Dropdown item #2</BaseDropdownItem>
      <BaseDropdownItem icon="check">Dropdown item #3</BaseDropdownItem>
      <BaseDropdownItem icon="check">Dropdown item #4</BaseDropdownItem>
      <BaseDropdownItem :disabled="true" icon="close">
        Dropdown item #5
      </BaseDropdownItem>
      <BaseDropdownItem :disabled="true" icon="block">
        Dropdown item #5
      </BaseDropdownItem>
    </BaseDropdown>
  `,
})

export const Large = (arg, { argTypes }) => ({
  components: { BaseDropdown },
  props: Object.keys(argTypes),
  template: `
    <BaseDropdown size="large" text="Large size" v-bind="$props">
      <BaseDropdownItem>Dropdown item #1</BaseDropdownItem>
      <BaseDropdownItem icon="check">Dropdown item #2</BaseDropdownItem>
      <BaseDropdownItem icon="check">Dropdown item #3</BaseDropdownItem>
      <BaseDropdownItem icon="check">Dropdown item #4</BaseDropdownItem>
      <BaseDropdownItem :disabled="true" icon="close">
        Dropdown item #5
      </BaseDropdownItem>
      <BaseDropdownItem :disabled="true" icon="block">
        Dropdown item #5
      </BaseDropdownItem>
    </BaseDropdown>
  `,
})
