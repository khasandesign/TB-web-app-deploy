<template>
  <div
    :class="{ hide: !showModal }"
    class="fixed bottom-0 md:bottom-6 md:left-6 left-0 md:right-none right-0 bg-[#1B1B1B] rounded-t-10px md:rounded-10px w-full md:max-w-[534px] md:pt-7 pt-9 md:px-10 px-4 pb-10 duration-500 ease-linear"
  >
    <h2
      class="h4 leading-10 tracking-wide text-center md:text-left text-label-primary-dark mb-6 md:mb-4"
    >
      {{
        $t('course.finishedNotificationTitle', {
          studentName: notificationDetails.studentName,
          authorName: notificationDetails.authorName,
        })
      }}
    </h2>
    <p class="btn-sm text-center md:text-left text-label-primary-dark">
      {{
        $t('course.finishedNotificationDesc', {
          authorName: notificationDetails.authorName,
          courseTitle: notificationDetails.courseTitle,
        })
      }}
    </p>
    <div class="flex flex-col md:flex-row">
      <BaseButton
        size="large"
        color="primary"
        class="flex justify-center mt-8 md:mt-6"
        :to="
          localePath({
            name: 'courses-courseId-certificate',
            params: { courseId: notificationDetails.courseId },
          })
        "
      >
        {{ $t('certificate.get') }}
      </BaseButton>
      <BaseButton
        size="large"
        class="flex justify-center bg-transparent md:bg-gray-5-dark md:ml-[10px] mt-1 md:mt-6"
        @click="showModal = false"
      >
        {{ $t('later') }}
      </BaseButton>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CourseFinishedNotification',
  props: {
    notificationDetails: {
      type: Object,
      reqired: true,
      default: () => {},
    },
  },
  data() {
    return {
      showModal: true,
    }
  },
}
</script>

<style lang="scss" scoped>
.hide {
  bottom: -100%;
  @media screen and(min-width: 767.5px) {
    left: -100%;
    bottom: 0;
  }
}
</style>
