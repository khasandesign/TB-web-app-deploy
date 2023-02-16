<template>
  <div
    class="sticky top-12 bg-gray-3-dark border border-solid border-gray-3-dark px-8 pt-8 pb-12 text-center rounded-10px"
  >
    <img
      src="@/assets/images/daniel-pink.png"
      class="inline-block rounded-full w-[80px] h-[80px]"
    />
    <h5 class="h5 mt-3">{{ $t('watchCourse', { name: 'Daniel Pink' }) }}</h5>
    <p class="subheadline mt-3">
      {{ $t('evermoreLong') }}
    </p>
    <BaseButton
      class="mt-5"
      :to="
        localePath({
          name: 'courses-courseId-purchase',
          params: { courseId: $route.params.courseId },
        })
      "
    >
      {{ $t('register.continue') }}
    </BaseButton>
  </div>
</template>

<script>
export default {
  name: 'CourseContinueCard',
  props: {
    course: {
      type: Object,
      required: true,
    },
  },
}
</script>
