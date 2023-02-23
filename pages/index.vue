<template>
  <div>
    <div
      v-if="courses.items.courses ? courses.items.courses.length > 0 : 0"
      class="relative top-0 left-0 w-full h-screen"
    >
      <CourseVideo class="w-full h-full" :course="courses.items.courses[0]" />
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
      <HomeOurCourse v-if="courses.items.courses ? courses.items.courses.length > 0 : 0" :courses="courses.items.courses" />
      <Feedback
        v-if="feedbacks.items.feedback ? feedbacks.items.feedback.length > 0 : 0"
        class="mb-[40px] md:mb-[80px]"
        :feedbacks="feedbacks.items.feedback"
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
  data() {
    return {
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
  computed: {
    courses() {
      return this.$store.getters["entity/getEntity"]("courses", 'all');
    },
    feedbacks() {
      return this.$store.getters["entity/getEntity"]("feedbacks", 'all');
    },
  },
  mounted(){
    this.$store.dispatch("entity/loadAll", {
      entity: "courses",
      name: "all",
      url: "/courses",
      params: {
        limit: 0
      },
      cb: {
        success: response => {
        },
        error: () => {}
      }
    });

    this.$store.dispatch("entity/loadAll", {
      entity: "feedbacks",
      name: "all",
      url: "/feedback",
      params: {
        limit: 0
      },
      cb: {
        success: response => {
        },
        error: () => {}
      }
    });
  },
}
</script>
