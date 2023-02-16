<template>
  <div
    class="grid grid-cols-4 py-6 border border-l-0 border-r-0 border-solid border-gray-1-dark text-label-primary-dark font-medium"
  >
    <button
      v-for="item in items"
      :key="item.key"
      :disabled="item.disabled"
      class="p-1 rounded-sm inline-flex flex-col items-center justify-center text-xs transition-colors duration-300 hover:bg-bg-secondary active:bg-bg-secondary disabled:cursor-auto disabled:bg-gray-3-dark"
      @click="handleItemClick(item.key)"
    >
      <BaseSpinner v-if="item.loading" />
      <template v-else>
        <div class="text-2xl">
          <span class="material-icons">{{ item.icon }}</span>
        </div>
        {{ item.title }}
      </template>
    </button>
  </div>
</template>

<script>
export default {
  name: 'CourseLessonMobileNav',
  props: {
    hasNextLesson: {
      type: Boolean,
      default: true,
    },
    cancelLoading: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {}
  },
  computed: {
    items() {
      return [
        {
          title: 'След. Урок',
          icon: 'skip_next',
          key: 'next-lesson',
          disabled: !this.hasNextLesson,
        },
        {
          title: 'Отменить',
          icon: 'bookmark_added',
          key: 'bookmark',
          disabled: false,
          loading: this.cancelLoading,
        },
        {
          title: 'Коментарии',
          icon: 'comment',
          key: 'comments',
          disabled: false,
        },
        {
          title: 'Все уроки',
          icon: 'view_list',
          key: 'all-lessons',
          disabled: false,
        },
      ]
    },
  },
  methods: {
    handleItemClick(key) {
      this.$emit('item-click', key)
    },
  },
}
</script>
