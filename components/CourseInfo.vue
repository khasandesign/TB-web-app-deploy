<template>
  <div
    class="space-y-8 max-w-[708px]"
    :class="[course.purchased ? '' : 'md:mt-[248px]']"
  >
    <h4 class="h4 md:w-8/12 text-center md:text-left">
      {{ course.author.profile.name }}
    </h4>
    <div class="flex justify-center md:justify-start">
      <article
        v-for="(item, idx) in items"
        :key="idx"
        class="flex flex-col items-center justify-center sm:px-16 sm:py-7 px-10 py-3 space-y-3"
        :class="{
          'border-r border-solid border-gray-7-dark': idx !== items.length - 1,
          'border-r border-solid border-gray-7-dark': idx !== items.length - 1,
          'hidden md:block': idx === 1,
        }"
      >
        <h3 class="h3 font-bold text-center">{{ item.value }}</h3>
        <h6 class="btn-sm font-normal text-center">
          {{ item.title }}
        </h6>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CourseInfo',
  props: {
    course: {
      type: Object,
      required: true,
    },
  },
  computed: {
    items() {
      return [
        { title: this.$t('lesson'), value: this.course.totalLessons },
        { title: this.$t('hour'), value: this.course.duration },
        { title: this.$t('reviews'), value: this.course.reviews },
      ]
    },
  },
}
</script>
