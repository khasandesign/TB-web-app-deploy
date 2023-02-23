<template>
  <div class="text-label-primary-dark">
    <CourseDemoHeader />
    <div class="w-full md:w-[95%] 3xl:w-10/12 mx-auto flex space-x-4">
      <section ref="main" class="w-full xl:w-[70%]">
        <div
          class="relative !w-full !h-auto min-w-full max-w-full md:min-h-[600px] md:rounded-10px"
        >
          <video
            src="/videos/daniel-pink.mp4"
            class="w-auto h-auto min-w-full min-h-full md:rounded-10px md:absolute md:right-0 md:bottom-0 object-cover overflow-hidden"
            controls
            @ended="handleVideoEnd"
          />
          <div
            v-if="showCourseFinished"
            class="flex items-center justify-center !w-full min-w-full max-w-full md:h-[600px] py-8 md:py-0 fixed md:absolute md:top-0 duration-700 left-0 z-[1] border border-solid border-white/[.08] bg-black/[.6] rounded-[10px] backdrop-blur-xl"
            :class="showCourseFinished ? 'bottom-0  ' : '-bottom-full'"
          >
            <div class="text-center w-full md:max-w-[400px]">
              <div class="flex justify-center -space-x-4 mb-3">
                <img
                  v-for="(img, index) in images"
                  :key="index"
                  class="w-20 h-20 rounded-full border-2 border-white dark:border-gray-800"
                  :src="img.image"
                  alt=""
                />
              </div>
              <h2 class="md:font-bold text-[24px] md:leading-7 mb-4">
                {{
                  $t('course.finishedTitle', {
                    author: course.author.profile.name,
                  })
                }}
              </h2>
              <p class="font-normal text-[16px] md:leading-[22px] mb-8">
                {{
                  $t('course.finishedDescription', {
                    courseTitle: course.title,
                  })
                }}
              </p>
              <BaseButton
                :to="
                  localePath({
                    name: 'courses-courseId-certificate',
                    params: { courseId: course.id },
                  })
                "
                class="mb-3"
              >
                {{ $t('certificate.get') }}
              </BaseButton>
              <br />
              <BaseButton color="gray" @click="handleGetCertificateLater">
                {{ $t('later') }}
              </BaseButton>
            </div>
          </div>
        </div>
        <main class="px-4 lg:px-0 mt-3">
          <section class="space-y-1">
            <div class="caption text-primary font-medium">
              {{ chapterTitle }}
            </div>
            <div class="flex items-center justify-between">
              <h6 class="h6 text-label-primary-dark font-bold">
                {{ lesson.index }}.
                <span class="capitalize">{{ lesson.title }}</span>
              </h6>
              <nav class="hidden lg:flex space-x-4">
                <BaseButton
                  icon="bookmark_added"
                  color="gray"
                  circle
                  :loading="isCancelLoading"
                  @click="handleCancelCourse"
                />
                <BaseButton
                  icon="comment"
                  color="gray"
                  circle
                  @click="scrollToComments"
                />
              </nav>
            </div>
            <p class="par-2 text-white/50 font-medium">
              {{ lesson.description }}
            </p>
          </section>

          <section class="xl:hidden mt-[20px]">
            <CourseLessonMobileNav
              :has-next-lesson="hasNextLesson"
              :cancel-loading="isCancelLoading"
              @item-click="handleMobileNavClick"
            />
            <BaseBottomSheet
              :show="showLessonListSheet"
              title="Программа"
              @close="showLessonListSheet = false"
            >
              <div class="pb-8 h-full max-h-full overflow-y-auto">
                <LessonList class="mt-4" :course="course" :items="chapters" />
                <div class="p-4">
                  <CourseContinueCard :course="course" />
                </div>
              </div>
            </BaseBottomSheet>
          </section>

          <section class="mt-2 lg:mt-4 space-y-4">
            <h6 class="h6 font-bold">{{ $t('articles') }}</h6>
            <div class="grid grid-cols-1 xl:grid-cols-2 gap-4">
              <ArticleCard
                v-for="article in articles"
                :key="article.id"
                :article="article"
              />
            </div>
          </section>
          <section ref="comments" class="mt-[36px]">
            <LessonComments
              :is-show-more-btn="isShowMoreBtn"
              :comments="comments"
              @show-more="getComments"
            />
          </section>

          <div class="divider mt-12"></div>
          <h4 class="mt-4 mb-2 h5 font-bold">{{ $t('courses') }}</h4>
          <p class="par-2 text-white/50 mb-6">
            {{ $t('coursesDescription') }}
          </p>
          <div class="hidden md:block relative md:mb-5">
            <div
              class="absolute md:w-[224px] h-full z-[1] top-0 right-0 linear"
            >
              <!-- :class="inMore ? 'rotate-[180deg] -bottom-[30px]' : 'bottom-4'" -->
              <!-- @click="inMore = !inMore" -->
              <BaseButton
                size="large"
                class="w-[56px] h-[56px] backdrop-blur-lg absolute top-1/2 -right-[20px] -translate-y-1/2 z-[2] flex items-center justify-center text-[15px] bg-gray-1-dark rounded-full"
                @click="slickNext"
              >
                <span v-if="arrowRightButton" class="material-icons">
                  keyboard_arrow_right</span
                >
                <span v-else class="material-icons"> keyboard_arrow_left</span>
              </BaseButton>
            </div>
            <div
              id="courseScroll"
              class="md:overflow-x-scroll custom-scroll-none"
            >
              <div class="md:relative md:w-[1200px]">
                <section
                  id="courseSection"
                  class="grid grid-cols-1 lg:grid-cols-2 gap-8"
                >
                  <CourseCard
                    v-for="(item, index) in courses"
                    :key="item.id"
                    :course="item"
                    :mask-type="(index % 2) + 1"
                  />
                </section>
              </div>
            </div>
          </div>
          <div class="md:hidden relative md:mb-5">
            <div
              v-if="!isMediaMoreCourse"
              class="absolute w-full h-[110px] z-[1] bottom-0 linear-media"
            ></div>
            <div class="absolute w-full z-[1] bottom-0 flex justify-center">
              <!-- :class="inMore ? 'rotate-[180deg] -bottom-[30px]' : 'bottom-4'" -->
              <!-- @click="inMore = !inMore" -->
              <BaseButton
                size="large"
                class="w-[56px] h-[56px] backdrop-blur-lg absolute -translate-y-1/2 z-[2] flex items-center justify-center text-[15px] bg-gray-1-dark rounded-full"
                @click="mediaMoreCourse"
              >
                <span v-if="!isMediaMoreCourse" class="material-icons">
                  keyboard_arrow_down</span
                >
                <span v-else class="material-icons"> keyboard_arrow_up</span>
              </BaseButton>
            </div>
            <div id="courseScroll" class="overflow-hidden custom-scroll-none">
              <div
                class="relative"
                :class="isMediaMoreCourse ? '' : 'h-[416px]'"
              >
                <section
                  id="courseSection"
                  class="grid grid-cols-1 lg:grid-cols-2 gap-8"
                >
                  <CourseCard
                    v-for="(item, index) in courses"
                    :key="item.id"
                    :course="item"
                    :mask-type="(index % 2) + 1"
                  />
                </section>
              </div>
            </div>
          </div>
        </main>
      </section>
      <section class="hidden xl:block w-[30%]">
        <div class="relative">
          <div
            v-if="hideOverlay"
            class="w-full absolute bottom-0 linear-list z-[2]"
          >
            <div class="linear-list w-full h-[40px]"></div>
          </div>
          <div
            id="lessonList"
            class="max-h-[600px] overflow-y-scroll custom-scroll relative mb-16"
            @scroll="handleScroll"
          >
            <LessonList :course="course" :items="chapters" />
          </div>
        </div>
        <CourseStudentInfo v-if="course.purchased" class="mt-16" />
        <CourseContinueCard v-else :course="{}" />
      </section>
    </div>
    <AppFooter />
  </div>
</template>

<script>
import { morphism } from 'morphism'
import BaseBottomSheet from '~/components/BaseBottomSheet.vue'
import { getArticleRepository } from '@/api/article'
import { getCourseRepository } from '~/api/course'
import { getLessonRepository } from '~/api/lessons'
import { COURSES } from '@/api/courses'
import CourseDemoHeader from '~/components/course/CourseDemoHeader'

export default {
  name: 'CourseDemoPage',
  components: { CourseDemoHeader, BaseBottomSheet },
  layout: 'empty',
  // async asyncData({ app, $axios, params, query, store }) {
  //   if (app.$loading) {
  //     app.$loading.start()
  //   }
  //   const courseRepository = getCourseRepository($axios)
  //   const articleRepository = getArticleRepository($axios)
  //   const lessonRepository = getLessonRepository($axios)

  //   const chapters = await courseRepository.getChapters(params.courseId)
  //   const articles = await articleRepository.getList({ limit: 2 })

  //   const response = await $axios.get(COURSES.LIST.url, { progress: false })
  //   const courses = morphism(COURSES.LIST.schema, response.data.courses)

  //   const course = await courseRepository.getCourse(params.courseId)
  //   const lesson = await lessonRepository.get(params.lessonId)

  //   const { page = 1, limit = 12 } = query
  //   const comments = await lessonRepository.getComments(
  //     params.lessonId,
  //     page,
  //     limit
  //   )

  //   if (app.$loading) {
  //     app.$loading.stop()
  //   }

  //   return {
  //     chapters,
  //     articles,
  //     courses,
  //     course,
  //     lesson,
  //     comments,
  //   }
  // },
  data() {
    return {
      showLessonListSheet: false,
      activeLesson: null,
      chapterTitle: null,
      lessonNumber: 1,
      isMediaMoreCourse: false,
      hideOverlay: true,
      showCourseFinished: false,
      arrowRightButton: true,
      comment: '',
      page: 1,
      images: [
        {
          image: require('@/assets/images/daniel-pink.png'),
        },
        {
          image: require('@/assets/images/avatar.png'),
        },
      ],
      isCancelLoading: false,
    }
  },
  head() {
    return {
      title: this.lesson.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.lesson.description,
        },
      ],
    }
  },
  computed: {
    isShowMoreBtn() {
      return this.comments.items.length < this.comments.total
    },
    isLastLesson() {
      return !this.lesson?.nextLessonId
    },
    hasNextLesson() {
      return !!this.lesson.nextLessonId && this.course.purchased
        ? true
        : this.lesson.index < 2
    },
  },
  mounted() {
    const index = this.lesson.index
    const lessonList = document.getElementById('lessonList')
    if (lessonList) {
      const top = lessonList.offsetTop
      const topItem = document.getElementById(`lesson${index}`).parentElement
        .offsetTop
      lessonList.scrollTop = topItem - top
    }
    if (this.course) {
      this.$store.commit('ui/SET_COURSE', this.course)
    }
  },
  beforeDestroy() {
    this.$confetti.stop()
    this.$store.commit('ui/SET_COURSE', null)
  },
  methods: {
    async getComments() {
      if (this.isShowMoreBtn) {
        const lessonRepository = getLessonRepository(this.$axios)
        this.page += 1
        const comments = await lessonRepository.getComments(
          this.lesson.id,
          this.page
        )
        this.comments.items.push(...comments.items)
      }
    },
    mediaMoreCourse() {
      this.isMediaMoreCourse = !this.isMediaMoreCourse
    },
    slickNext() {
      const courseScroll = document.getElementById('courseScroll')
      const courseSection = document.getElementById('courseSection')
      const cardGap = 32
      if (this.arrowRightButton) {
        courseScroll.scrollTo({
          left: courseSection.firstElementChild.offsetWidth + cardGap,
          behavior: 'smooth',
        })
        if (
          (courseScroll.scrollLeft + courseScroll.offsetWidth,
          courseScroll.offsetWidth)
        ) {
          this.arrowRightButton = false
        }
      } else {
        courseScroll.scrollTo({
          left: -courseSection.firstElementChild.offsetWidth - cardGap,
          behavior: 'smooth',
        })
        if (
          courseScroll.scrollLeft <= courseSection.firstElementChild.offsetWidth
        ) {
          this.arrowRightButton = true
        }
      }
    },
    handleScroll() {
      const lessonList = document.getElementById('lessonList')
      this.hideOverlay =
        lessonList.scrollTop + lessonList.offsetHeight !==
        lessonList.scrollHeight
    },
    handleVideoEnd() {
      if (this.isLastLesson) {
        this.showCourseFinished = true
        this.finishCourse()
      }
    },
    finishCourse() {
      this.$confetti.start({
        particles: [
          {
            type: 'rect',
          },
        ],
      })
    },

    scrollToComments() {
      this.$refs.comments.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    },
    goToNextLesson() {
      this.$router.push(
        this.localePath({
          name: this.getRouteBaseName(),
          params: {
            ...this.$route.params,
            lessonId: this.lesson.nextLessonId,
          },
          query: this.$route.query,
        })
      )
    },
    handleMobileNavClick(key) {
      switch (key) {
        case 'all-lessons':
          this.showLessonListSheet = true
          break
        case 'comments':
          this.scrollToComments()
          break
        case 'next-lesson':
          this.goToNextLesson()
          break
        case 'bookmark':
          this.handleCancelCourse()
          break
        default:
          break
      }
    },
    handleGetCertificateLater() {},
    async handleCancelCourse() {
      const courseRepository = getCourseRepository(this.$axios)
      try {
        this.isCancelLoading = true
        await courseRepository.cancel(this.course.id)
        this.$toast.info(this.$t('course.cancelSuccess'))
      } catch (e) {
        this.$toast.error(e.message)
      } finally {
        this.isCancelLoading = false
      }
    },
  },
}
</script>

<style scoped>
.custom-scroll-none::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgb(0 0 0 / 30%);
  border-radius: 10px;
  background-color: transparent;
}

.custom-scroll-none::-webkit-scrollbar {
  height: 10px;
  width: 7px;
  background: transparent;
  border-radius: 3.5px;
}

.custom-scroll-none::-webkit-scrollbar-thumb {
  border-radius: 10px;
  box-shadow: inset 0 0 6px rgb(0 0 0 / 30%);
  background-color: transparent;
}

.custom-scroll::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgb(0 0 0 / 30%);
  border-radius: 10px;
  background-color: transparent;
}

.custom-scroll::-webkit-scrollbar {
  height: 10px;
  width: 7px;
  background: transparent;
  border-radius: 3.5px;
}

.custom-scroll::-webkit-scrollbar-thumb {
  border-radius: 10px;
  box-shadow: inset 0 0 6px rgb(0 0 0 / 30%);
  background-color: #ffffff80;
}

.linear-list {
  background: linear-gradient(
    180deg,
    rgb(8 8 8 / 0%) 0%,
    rgb(8 8 8 / 83%) 63.54%,
    #080808 100%
  );
}

.linear-media {
  background: linear-gradient(
    180deg,
    rgb(8 8 8 / 0%) 0%,
    rgb(8 8 8 / 83%) 63.54%,
    #080808 100%
  );
}

.linear {
  background: linear-gradient(
    270deg,
    #080808 0%,
    rgb(8 8 8 / 0%) 35.94%,
    rgb(8 8 8 / 0%) 100%
  );
}
</style>
