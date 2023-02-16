<template>
  <div class="bg-bg-primary text-label-primary-dark">
    <CourseShareModal
      :course="course"
      :show="showShareModal"
      @close="showShareModal = false"
    />
    <div class="container-fluid">
      <CourseVideo class="h-screen md:h-auto" :course="course" />
    </div>
    <AppHeader :fixed="false" />

    <section class="container">
      <main class="content">
        <div class="mt-6 lg:mt-[72px] lg:px-0">
          <section
            class="flex flex-col space-y-4 items-center lg:space-y-0 lg:flex-row relative"
          >
            <div
              class="w-full flex justify-center lg:w-5/12 lg:absolute lg:left-[50%] lg:top-[50%] transform lg:-translate-y-1/2"
            >
              <img
                class="rounded-full w-[74px] h-[74px] sm:w-32 sm:h-32 object-cover aspect-square lg:w-full lg:h-auto"
                :src="course.thumbnail"
                :alt="course.name"
              />
            </div>
            <div class="w-full lg:w-8/12 relative z-10">
              <h1 class="h3 text- center lg:text-left xl:h1">
                –– {{ course.author.profile.name }} {{ course.title }}
              </h1>

              <section class="mt-[52px] md:mt-[100px] md:w-6/12 lg:w-6/12">
                <CourseLessonCard :course="course" class="lg:hidden" />

                <div class="flex lg:space-x-3 mt-4 lg:mt-[100px]">
                  <BaseButton
                    class="hidden lg:flex"
                    size="large"
                    icon="play_arrow"
                    :to="
                      localePath({
                        name: 'courses-courseId-lessons-lessonId',
                        params: {
                          courseId: course.id,
                          lessonId: course.chapters[0].lessons[0].id,
                        },
                      })
                    "
                  >
                    {{ $t('watch') }}
                  </BaseButton>
                  <BaseButton
                    class="flex justify-center w-full lg:w-auto"
                    icon="ios_share"
                    size="large"
                    color="gray"
                    @click="openShareModal"
                  >
                    {{ $t('share') }}
                  </BaseButton>
                </div>
              </section>
            </div>
          </section>

          <CourseInfo class="mt-[54px] lg:mt-[191px]" :course="course" />
          <section
            class="w-full md:w-7/12 md:ml-[33.33%] mt-14 space-y-9 text-center md:text-left"
          >
            <h4 class="h4 font-normal text-label-secondary-dark">
              {{ course.description }}
            </h4>
            <h4 class="h4 font-normal text-label-secondary-dark">
              {{ course.description }}
            </h4>
          </section>

          <CourseProgram class="mt-[80px]" :course="course" />

          <section class="space-y-12">
            <h3 class="h3 mt-28">{{ $t('trailer') }}</h3>
            <video :src="course.trailer" controls class="w-full" />
          </section>

          <div class="divider mt-[80px] mb-6"></div>
        </div>
      </main>
    </section>
    <client-only>
      <section class="container-fluid">
        <Feedback :feedbacks="feedbacks" />
      </section>
    </client-only>

    <section class="mt-[80px]">
      <div class="container">
        <main class="content space-y-10">
          <CoursePrice v-if="!isPurchased" :course="course" />
          <FAQcomponent :faqs="faqs" />
        </main>
      </div>
    </section>
    <AppFooter />
  </div>
</template>

<script>
import { morphism } from 'morphism'
import { FEEDBACK } from '@/api/feedback'
import Feedback from '~/components/HomePage/Feedback.vue'
import FAQcomponent from '~/components/HomePage/FAQcomponent.vue'
import CourseVideo from '~/components/course/CourseVideo.vue'
import AppHeader from '~/components/layout/AppHeader'
export default {
  name: 'CoursePage',
  components: { AppHeader, Feedback, FAQcomponent, CourseVideo },
  layout: 'empty',
  async asyncData({ $axios, params, store }) {
    const { data: course } = await $axios.get(`courses/${params.courseId}`)
    store.commit('ui/SET_COURSE', course)
    const {
      data: { feedback },
    } = await $axios.get(FEEDBACK.LIST.url)
    const feedbacks = morphism(FEEDBACK.LIST.schema, feedback)
    return { course, feedbacks }
  },
  data() {
    return {
      course: null,
      showShareModal: false,
      faqs: ['what', 'whatYouGet', 'pay', 'backMoney', 'howToShow', 'whereQue'],
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
  computed: {
    isPurchased() {
      return this.course.purchased
    },
  },
  mounted() {
    if (this.course && !this.$store.state.ui.course) {
      this.$store.commit('ui/SET_COURSE', this.course)
    }
  },
  beforeDestroy() {
    this.$store.commit('ui/SET_COURSE', null)
  },
  methods: {
    openShareModal() {
      this.showShareModal = true
    },
  },
}
</script>
