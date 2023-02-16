<template>
  <div
    class="relative rounded-[12px] p-2.5 bg-white/[.04] border border-solid border-white/[.04]"
  >
    <div
      class="absolute top-0 left-0 h-full -z-[1] result"
      :style="`width:${course.result}`"
    />
    <img
      class="w-full h-[185px] rounded-xl object-cover mb-4"
      :src="course.thumbnail"
      alt="course-img"
    />
    <h2 class="text-[16px] leading-[22px] text-label-primary-dark mb-[6px]">
      {{ course.title }}
    </h2>
    <p class="text-[15px] leading-5 text-label-secondary-dark">
      {{ course.author.profile.name }}
    </p>
  </div>
</template>
<script>
export default {
  name: 'CourseLessonCard',
  props: {
    lessonNumber: {
      type: Number,
      default: 1,
    },
    course: {
      type: Object,
      required: true,
    },
  },
}
</script>
