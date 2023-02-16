<template>
  <ShareModal :data="course" v-bind="$attrs" v-on="$listeners">
    <h2
      class="font-clarendon text-[40px] leading-10 w-full mb-3 w-11/12 mx-auto"
    >
      {{ course.title }}
    </h2>
    <p class="leading-5 text-base w-[244px]">{{ course.resource }}</p>
  </ShareModal>
</template>

<script>
export default {
  name: 'CourseShareModal',
  props: {
    course: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      showModal: false,
    }
  },
  methods: {
    close() {
      this.showModal = false
    },
    open() {
      this.showModal = true
    },
  },
}
</script>
