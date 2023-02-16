import BasePagination from './BasePagination.vue'

export default {
  title: 'BasePagination',
  component: BasePagination,
}

export const Default = (arg, { argTypes }) => ({
  components: { BasePagination },
  props: Object.keys(argTypes),
  template: `
    <BasePagination
      :total-items="100"
      :current-page.sync="currentPage"
      :page-size="5"
    />
  `,
})

export const Iconic = (arg, { argTypes }) => ({
  components: { BasePagination },
  props: Object.keys(argTypes),
  template: `
    <BasePagination
      :total-items="100"
      iconic
      :current-page.sync="currentPage"
      :page-size="5"
    />
  `,
})
