<template>
  <div
    class="relative rounded-[12px] p-2.5 bg-white/[.04] border border-solid border-white/[.04]"
  >
    <div
      class="absolute top-0 left-0 h-full -z-[1] result"
      :style="`width:${lesson.result}%`"
    ></div>
    <img
      class="w-full h-[185px] rounded-xl object-cover mb-4"
      :src="lesson.image"
      alt="lesson-img"
    />
    <h2 class="text-[16px] leading-[22px] text-label-primary-dark mb-[6px]">
      {{ lesson.chapterIndex }}. {{ lesson.title }}
    </h2>
    <p class="text-[15px] leading-5 text-label-secondary-dark">
      {{ lesson.status }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'LessonCard',
  props: {
    lesson: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.result {
  background: linear-gradient(
    270deg,
    rgba(255, 255, 255, 0.04) 0%,
    rgba(255, 255, 255, 0) 100%
  );
}
</style>
