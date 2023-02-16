<template>
  <div class="text-label-primary-dark">
    <div
      v-for="chapter in items"
      :key="chapter.id"
      class="mb-4"
      :class="{ chapters: !course.purchased }"
    >
      <div
        class="capitalize bg-white bg-opacity-[0.06] border border-solid border-gray-3-dark lg:rounded-10px px-6 py-[10px] par-1"
      >
        {{ chapter.name }}
      </div>
      <div
        v-for="(lesson, index) in chapter.lessons"
        :id="'lesson' + lesson.index"
        :key="lesson.id"
        class="lists px-6 py-5"
        :class="{
          'mt-2': isActiveFirstElement,
          'border-b border-solid border-gray-1-dark':
            index !== chapter.lessons.length - 1,
          'bg-white bg-opacity-[0.06] border border-solid border-gray-3-dark lg:rounded-10px par-1':
            lesson.id === +$route.params.lessonId,
        }"
      >
        <nuxt-link
          class="flex justify-between cursor-pointer"
          :disabled="!course.purchased"
          :class="{
            'text-white/[.5] pointer-events-none':
              !course.purchased && lesson.index > 2,
          }"
          :to="
            localePath({
              name: 'courses-courseId-lessons-lessonId',
              params: { courseId: $route.params.courseId, lessonId: lesson.id },
            })
          "
        >
          <div class="flex">
            <span
              v-if="!course.purchased && lesson.index > 2"
              class="material-icons w-8"
            >
              lock_black
            </span>
            <h5 class="par-1">
              {{ lesson.index }}.
              <span class="capitalize">{{ lesson.title }}</span>
              <span v-if="lesson.done" class="material-icons">
                check_circle
              </span>
            </h5>
          </div>
          <p class="subheadline text-label-tertiary-dark flex-shrink-0">
            {{ lesson.duration }}
          </p>
        </nuxt-link>
        <p
          v-if="lesson.id === +$route.params.lessonId && lesson.description"
          class="text-white/50 par-2 mt-4"
        >
          {{ lesson.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    course: {
      type: Object,
      required: true,
    },
    items: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      activeLesson: null,
      isActiveFirstElement: true,
    }
  },
}
</script>

<style lang="scss" scoped>
.chapters:first-child {
  .lists:nth-child(2),
  .lists:nth-child(3) {
    a {
      color: rgba(255, 255, 255, 0.9) !important;
    }
  }
}
</style>
