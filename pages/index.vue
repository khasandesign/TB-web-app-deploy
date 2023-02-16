<template>
  <div>
    <div
      v-if="courses.length > 0"
      class="relative top-0 left-0 w-full h-screen"
    >
      <CourseVideo class="w-full h-full" :course="courses[0]" />
    </div>
    <div
      class="bg-bg-primary sticky z-20 top-0 left-0 text-label-primary-dark w-full"
    >
      <AppHeader :fixed="false" />
    </div>
    <div>
      <FormSection
        class="mb-[40px] md:mb-[150px]"
        :courses="$auth.loggedIn ? $auth.user.courses : undefined"
      />
      <HomeOurCourse v-if="courses.length > 0" :courses="courses" />
      <Feedback
        v-if="feedbacks.length > 0"
        class="mb-[40px] md:mb-[80px]"
        :feedbacks="feedbacks"
      />
      <section class="container">
        <div class="content">
          <FAQ :faqs="faqs" />
        </div>
      </section>
    </div>
    <AppFooter />
  </div>
</template>

<script>
import { morphism } from 'morphism'
import { COURSES } from '@/api/courses'
import { FEEDBACK } from '@/api/feedback'
import AppHeader from '@/components/layout/AppHeader.vue'
import Feedback from '@/components/HomePage/Feedback.vue'
import FAQ from '@/components/HomePage/FAQcomponent.vue'
import HomeOurCourse from '~/components/HomePage/HomeOurCourse.vue'
import FormSection from '@/components/HomePage/Form-section.vue'
import CourseVideo from '~/components/course/CourseVideo.vue'

export default {
  name: 'HomePage',
  components: {
    AppHeader,
    FormSection,
    HomeOurCourse,
    FAQ,
    Feedback,
    CourseVideo,
  },
  layout: 'empty',
  async asyncData({ $axios }) {
    const response = await $axios.get(COURSES.LIST.url)
    const courses = response.data.courses

    const {
      data: { feedback },
    } = await $axios.get(FEEDBACK.LIST.url)
    const feedbacks = morphism(FEEDBACK.LIST.schema, feedback)

    return {
      courses,
      feedbacks,
    }
  },
  data() {
    return {
      courses: [],
      feedbacks: [],
      faqs: ['what', 'whatYouGet', 'pay', 'backMoney', 'howToShow', 'whereQue'],
    }
  },
  head() {
    return {
      title: this.$t('homepage'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            this.$t('home.homeTitle.start') +
            this.$t('home.homeTitle.middle') +
            this.$t('home.homeTitle.end'),
        },
      ],
    }
  },
}
</script>
