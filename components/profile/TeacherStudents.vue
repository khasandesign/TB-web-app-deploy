<template>
  <div class="flex -space-x-4">
    <div
      v-for="(item, index) in students"
      :key="index"
      class="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800"
    >
      <img :src="item.image" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'TeacherStudents',
  props: {
    students: {
      type: Array,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped></style>
