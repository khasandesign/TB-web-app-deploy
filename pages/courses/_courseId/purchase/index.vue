<template>
  <div class="w-full min-h-screen bg-[#080808] text-label-primary-dark">
    <PaymentPageBuilder :course="course" />
  </div>
</template>

<script>
export default {
  name: 'CoursePurchasePage',
  layout: 'empty',
  // async asyncData({ $axios, params }) {
  //   const { data: course } = await $axios.get(`courses/${params.courseId}`)
  //   return { course }
  // },
  data() {
    return {
      course: undefined,
    }
  },
  head() {
    return {
      title: this.course.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.course.description,
        },
      ],
    }
  },
}
</script>
