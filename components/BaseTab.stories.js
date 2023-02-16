import BaseTab from './BaseTab.vue'
import BaseTabItem from './BaseTabItem.vue'

export default {
  title: 'BaseTab',
  component: BaseTab,
}

export const Default = (arg, { argTypes }) => ({
  components: { BaseTab, BaseTabItem },
  props: Object.keys(argTypes),
  template: `
    <BaseTab>
      <BaseTabItem name="tab1" title="Tab 1">
        <p>Tab 1 content</p>
      </BaseTabItem>
      <BaseTabItem name="tab2" title="Tab 2">
        <p>Tab 2 content</p>
      </BaseTabItem>
      <BaseTabItem name="tab3" title="Tab 3">
        <p>Tab 3 content</p>
      </BaseTabItem>

      <BaseTabItem name="tab4" title="Tab 4">
        <p>Tab 4 content</p>
      </BaseTabItem>
    </BaseTab>
  `,
})

export const Iconic = (arg, { argTypes }) => ({
  components: { BaseTab, BaseTabItem },
  props: Object.keys(argTypes),
  template: `
    <BaseTab>
      <BaseTabItem name="tab1" icon="home">
        <p>Tab 1 content</p>
      </BaseTabItem>
      <BaseTabItem name="tab2" icon="menu">
        <p>Tab 2 content</p>
      </BaseTabItem>
      <BaseTabItem name="tab3" icon="settings">
        <p>Tab 3 content</p>
      </BaseTabItem>

      <BaseTabItem name="tab4" icon="favorite">
        <p>Tab 4 content</p>
      </BaseTabItem>
    </BaseTab>
  `,
})

export const Disabled = (arg, { argTypes }) => ({
  components: { BaseTab, BaseTabItem },
  props: Object.keys(argTypes),
  template: `
    <BaseTab>
      <BaseTabItem name="tab1" icon="home" disabled>
        <p>Tab 1 content</p>
      </BaseTabItem>
      <BaseTabItem name="tab2" icon="menu">
        <p>Tab 2 content</p>
      </BaseTabItem>
      <BaseTabItem name="tab3" icon="settings">
        <p>Tab 3 content</p>
      </BaseTabItem>

      <BaseTabItem name="tab4" icon="favorite">
        <p>Tab 4 content</p>
      </BaseTabItem>
    </BaseTab>
  `,
})
