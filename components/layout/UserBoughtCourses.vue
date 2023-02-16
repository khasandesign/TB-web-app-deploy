<template>
  <div class="flex -space-x-4">
    <NuxtLink
      v-for="course in $auth.user.courses"
      :key="course.id"
      :to="
        localePath({
          name: 'courses-courseId',
          params: { courseId: course.id },
        })
      "
      :title="course.title"
      class="transition-transform duration-200 hover:scale-[1.1]"
    >
      <img
        :src="course.thumbnail"
        :width="48"
        :heigt="48"
        class="rounded-full w-12 h-12 object-cover"
      />
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'UserBoughtCourses',
}
</script>
