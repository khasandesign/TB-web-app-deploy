<template>
  <div class="relative pb-14 border-b border-b-gray-1-dark mb-4 saved-lessons">
    <h1 class="mb-6 font-bold leading-8 text-xl">
      {{ $t('savedLessons') }}
    </h1>
    <VueSlickCarousel :arrows="false" :infinite="false" :variable-width="true">
      <NuxtLink
        v-for="{ id, lesson, teacher } in savedLessons"
        :key="id"
        :to="
          localePath({
            name: 'courses-courseId-lessons-lessonId',
            params: { courseId: lesson.courseId, lessonId: id },
          })
        "
        class="!w-[285px] md:!w-[342px] pr-2 md:pr-6 h-[272px] md:h-[276px]"
      >
        <div
          class="w-full h-full rounded-xl bg-gray-3-dark border border-gray-3-dark"
        >
          <div class="w-full px-[6px] md:px-[10px] pt-[6px] md:pt-[10px]">
            <div
              class="h-[186px] rounded-lg"
              :style="{ backgroundImage: `url('${lesson.resource}')` }"
            ></div>
          </div>
          <div class="w-full pl-4 pt-4 font-medium">
            <NuxtLink :to="`/course/lesson/${id}`" class="par-2">
              {{ lesson.title }}
            </NuxtLink>
            <h3 class="btn-sm mt-[6px] text-label-secondary-dark">
              {{ teacher.name }}
            </h3>
          </div>
        </div>
      </NuxtLink>
    </VueSlickCarousel>
    <div
      class="hidden md:block w-56 h-[276px] bg-right-shadow absolute right-0 top-1/2 -translate-y-1/2 z-20"
    ></div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'

export default {
  name: 'ProfileSavedLessons',
  components: {
    VueSlickCarousel,
  },
  props: {
    savedLessons: {
      type: Array,
      default: () => {},
    },
  },
}
</script>
