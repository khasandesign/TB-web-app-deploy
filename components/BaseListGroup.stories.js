import BaseListGroup from './BaseListGroup.vue'
import BaseListGroupItem from './BaseListGroupItem.vue'

export default {
  title: 'BaseListGroup',
  component: BaseListGroup,
}

export const Default = (arg, { argTypes }) => ({
  components: { BaseListGroup, BaseListGroupItem },
  props: Object.keys(argTypes),
  template: `
    <BaseListGroup>
        <BaseListGroupItem>
            Title
            <template #suffix>
                <span class="material-icons">chevron_right</span>
            </template>
        </BaseListGroupItem>
        <BaseListGroupItem>
            Title
            <template #suffix>
                Detail <span class="material-icons">chevron_right</span>
            </template>
        </BaseListGroupItem>
        <BaseListGroupItem>
            Title
            <template #suffix>
                <input type="checkbox" />
            </template>
        </BaseListGroupItem>
    </BaseListGroup>
    `,
})

export const Large = (arg, { argTypes }) => ({
  components: { BaseListGroup, BaseListGroupItem },
  props: Object.keys(argTypes),
  template: `
    <BaseListGroup>
        <BaseListGroupItem subtitle="Subtitle">
            Title
            <template #prefix>
                <input type="radio" name="rad" />
            </template>
            <template #suffix>
                Detail <span class="material-icons">chevron_right</span>
            </template>
        </BaseListGroupItem>
    </BaselistGroup>
    `,
})
