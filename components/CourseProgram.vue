<template>
  <div
    v-if="
      course && Array.isArray(course.chapters) && course.chapters.length > 0
    "
    class="border-solid border-t border-gray-5-dark pt-3 md:pt-6 text-label-primary-dark"
  >
    <h3 class="h3">{{ $t('program') }}</h3>
    <div v-for="(chapter, chapterIdx) in course.chapters" :key="chapter.id">
      <BaseAlert
        color="gray-4"
        size="sm"
        class="capitalize section-head my-5 w-screen sm:w-full relative h-full min-h-[36px] rounded-none sm:rounded-10px font-semibold"
      >
        {{ chapter.name }}
      </BaseAlert>
      <BaseAccordion>
        <BaseAccordionItem
          v-for="(item, idx) in chapter.lessons"
          :key="item.id"
          :name="item.id"
        >
          <template #header>
            <div class="flex items-center space-x-3 pr-2">
              <span class="font-medium capitalize">
                {{ calculateIndex(chapterIdx, idx) }}. {{ item.title }}
              </span>
              <BaseButton
                v-if="
                  course.purchased ? true : calculateIndex(chapterIdx, idx) < 3
                "
                icon="play_arrow"
                :to="
                  localePath({
                    name: 'courses-courseId-lessons-lessonId',
                    params: {
                      courseId: $route.params.courseId,
                      lessonId: item.id,
                    },
                  })
                "
                circle
                color="gray"
                @click.native.stop="() => {}"
              >
              </BaseButton>
            </div>
          </template>
          <div class="font-normal">
            {{ item.description }}
          </div>
        </BaseAccordionItem>
      </BaseAccordion>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CourseProgram',
  props: {
    course: {
      type: Object,
      required: true,
    },
  },
  methods: {
    calculateIndex(chapterIndex, index) {
      return (
        this.course.chapters
          .slice(0, chapterIndex)
          .map((chapter) => chapter.lessons.length)
          .reduce((res, n) => res + n, 0) +
        index +
        1
      )
    },
  },
}
</script>

<style lang="scss" scoped>
.section-head {
  @media screen and (max-width: 640px) {
    left: calc(-50vw + 50%);
  }
}
</style>
