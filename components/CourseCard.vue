<template>
  <div class="relative bg-[#121212] rounded-[10px]">
    <CourseShareModal
      :course="courseForShare"
      :show="showShareModal"
      @close="showShareModal = false"
    />
    <div class="flex flex-col md:flex-row h-full">
      <div
        class="relative w-full md:self-stretch md:w-[40%]"
        :class="{ 'md:mask1': maskType === 1, 'md:mask2': maskType === 2 }"
      >
        <img
          class="block w-full h-full object-cover rounded-tl-xl rounded-tr-xl rounded-bl-[30%] md:rounded-bl-none"
          :src="course.thumbnail"
          :alt="course.title"
        />
        <button
          class="absolute top-2 right-1.5 z-10 w-12 h-12 flex items-center justify-center text-3xl"
          @click="handleShare"
        >
          <BaseIcon name="share" />
        </button>
        <nuxt-link
          :to="
            localePath({
              name: 'courses-courseId-lessons-lessonId',
              params: {
                courseId: course.id,
                lessonId: 1,
              },
            })
          "
          class="flex items-center justify-center md:hidden absolute bottom-0 right-6 z-10 transform translate-y-1/2 w-[56px] h-[56px] rounded-full bg-white/10 backdrop-blur-lg text-3xl"
        >
          <span class="material-icons">play_arrow</span>
        </nuxt-link>
      </div>
      <div class="w-full md:w-[60%] text-label-primary-dark px-8 pt-12 pb-5">
        <h6 class="h6 font-bold line-clamp-2" :title="course.title">
          {{ course.title }}
        </h6>
        <p class="text-label-secondary-dark mt-[10px] caption">
          <span>{{ course.lesson }}</span> {{ $t('lesson') }} ·
          <span>{{ course.hour }}</span> {{ $t('hour') }} ·
          <nuxt-link class="underline" to="#">{{ $t('program') }}</nuxt-link>
        </p>
        <p
          class="subheadline max-w-[280px] mt-[14px] line-clamp-3"
          :title="course.description"
        >
          {{ course.description }}
        </p>
        <section class="hidden md:flex justify-end mt-2">
          <BaseButton
            :to="
              localePath({
                name: 'courses-courseId-lessons-lessonId',
                params: { courseId: course.id, lessonId: 1 },
              })
            "
            size="large"
            icon="play_arrow"
            circle
            color="gray"
          />
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CourseCard',
  props: {
    course: {
      type: Object,
      required: true,
    },
    maskType: {
      type: Number,
      default: 1,
      validator(value) {
        return [1, 2].includes(value)
      },
    },
  },
  data() {
    return {
      showShareModal: false,
    }
  },
  computed: {
    courseForShare() {
      return {
        ...this.course,
        url: `${this.$store.state.ui.domain}/courses/${this.course.id}`,
      }
    },
  },
  methods: {
    handleShare() {
      this.showShareModal = true
    },
  },
}
</script>
