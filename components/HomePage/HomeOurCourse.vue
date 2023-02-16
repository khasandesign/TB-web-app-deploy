<template>
  <div class="text-label-primary-dark container">
    <CourseShareModal
      :show="showShareModal"
      :course="courseToShare"
      @close="handleCloseShareModal"
    />
    <main class="content">
      <div class="h-[1px] w-full bg-white/[.1] mb-6"></div>
      <h1
        class="text-[32px] leading-7 md:text-[48px] md:leading-12 font-bold mb-12"
      >
        {{ $t('home.ourCourses') }}
      </h1>
      <div v-if="courses !== null">
        <!-- Mobile cards -->
        <div class="md:hidden">
          <nuxt-link
            :to="
              localePath({
                name: 'courses-courseId',
                params: { courseId: courses[0].id },
              })
            "
            class="card block relative bg-[#121212] rounded-[10px] overflow-hidden mb-5"
          >
            <button
              class="absolute top-2 right-1.5 z-10 w-12 h-12 flex items-center justify-center text-3xl"
              @click.stop.prevent="handleCourseShare(courses[0])"
            >
              <BaseIcon name="share" />
            </button>
            <div class="flex flex-col">
              <div class="relative">
                <img
                  class="object-cover mb-6 rounded-bl-[100px] rounded-[10px] rounded-br-none"
                  :src="courses[0].thumbnail"
                  alt="Cinque Terre"
                  width="600"
                  height="400"
                />
                <BaseButton
                  size="large"
                  class="w-[56px] h-[56px] backdrop-blur-lg absolute bottom-0 right-6 flex items-center justify-center text-3xl bg-gray-1-dark rounded-full"
                  @click.stop.prevent="isVideo1 = !isVideo1"
                >
                  <span class="material-icons">play_arrow</span>
                </BaseButton>
              </div>
              <div class="text-label-primary-dark px-6">
                <h1 class="text-[32px] leading-[36px] font-bold mb-3">
                  {{ firstCourseAuthor }}
                </h1>
                <p class="text-label-secondary-dark mb-5">
                  <span> {{ courses[0].lesson }}</span> {{ $t('lesson') }} ·
                  <span> {{ courses[0].hour }}</span> {{ $t('hour') }} ·
                  <nuxt-link
                    class="underline"
                    :to="
                      localePath({
                        name: 'courses-courseId',
                        params: { courseId: courses[0].id },
                      })
                    "
                    >{{ $t('program') }}</nuxt-link
                  >
                </p>
                <p class="max-w-[280px] mb-10">
                  {{ courses[0].description }}
                </p>
              </div>
            </div>
          </nuxt-link>
          <div v-if="isVideo1" class="">
            <video
              class="w-full rounded-xl mb-5"
              controls
              :src="courses[0].resource"
            ></video>
          </div>
          <nuxt-link
            :to="
              localePath({
                name: 'courses-courseId',
                params: { courseId: courses[1].id },
              })
            "
            class="card block relative bg-[#121212] rounded-[10px] overflow-hidden mb-5"
          >
            <button
              class="absolute top-2 right-1.5 z-10 w-12 h-12 flex items-center justify-center text-3xl"
              @click.stop.prevent="handleCourseShare(courses[1])"
            >
              <BaseIcon name="share" />
            </button>
            <div class="flex flex-col">
              <div class="relative">
                <img
                  class="object-cover mb-6 rounded-bl-[100px] rounded-[10px] rounded-br-none"
                  :src="courses[1].thumbnail"
                  alt="Cinque Terre"
                  width="600"
                  height="400"
                />
                <BaseButton
                  size="large"
                  class="w-[56px] h-[56px] backdrop-blur-lg absolute bottom-0 right-6 flex items-center justify-center text-3xl bg-gray-1-dark rounded-full"
                  @click.stop.prevent="isVideo2 = !isVideo2"
                >
                  <span class="material-icons">play_arrow</span>
                </BaseButton>
              </div>
              <div class="text-label-primary-dark px-6">
                <h1 class="text-[32px] leading-[36px] font-bold mb-3">
                  {{ secondCourseAuthor }}
                </h1>
                <p class="text-label-secondary-dark mb-5">
                  <span> {{ courses[1].lesson }}</span> {{ $t('lesson') }} ·
                  <span> {{ courses[1].hour }}</span> {{ $t('hour') }} ·
                  <nuxt-link
                    class="underline"
                    :to="
                      localePath({
                        name: 'courses-courseId',
                        params: { courseId: courses[1].id },
                      })
                    "
                    >{{ $t('program') }}</nuxt-link
                  >
                </p>
                <p class="max-w-[280px] mb-10">
                  {{ courses[1].description }}
                </p>
              </div>
            </div>
          </nuxt-link>
          <div v-if="isVideo2" class="">
            <video
              class="w-full rounded-xl"
              controls
              :src="courses[1].resource"
            ></video>
          </div>
        </div>

        <!-- Desktop cards-->
        <div class="hidden md:block">
          <nuxt-link
            :to="
              localePath({
                name: 'courses-courseId',
                params: { courseId: courses[0].id },
              })
            "
            class="block relative bg-[#121212] h-[540px] rounded-[10px] overflow-hidden mb-5"
          >
            <img
              class="w-[300px] h-[540px] absolute right-0 top-0"
              src="@/assets/home-img/cardRightElement.png"
              alt=""
            />
            <div class="flex items-center h-full">
              <div class="mask1 h-full">
                <img
                  class="h-full object-cover"
                  :src="courses[0].thumbnail"
                  alt="Cinque Terre"
                  width="576"
                />
              </div>
              <div class="text-label-primary-dark">
                <h1
                  class="font-cheltenham text-[56px] leading-[56px] font-bold mb-3"
                >
                  {{ firstCourseAuthor }}
                </h1>
                <p
                  class="text-label-secondary-dark text-[15px] leading-5 font-medium mb-5"
                >
                  <span>{{ courses[0].lesson }}</span> {{ $t('lesson') }} ·
                  <span>{{ courses[0].hour }}</span> {{ $t('hour') }} ·
                  <nuxt-link
                    class="underline"
                    :to="
                      localePath({
                        name: 'courses-courseId',
                        params: { courseId: courses[0].id },
                      })
                    "
                    >{{ $t('program') }}</nuxt-link
                  >
                </p>
                <p
                  class="max-w-[342px] text-[18px] leading-6 font-normal mb-10 line-clamp-3"
                >
                  {{ courses[0].description }}
                </p>
                <BaseButton
                  size="large"
                  class="w-12 flex items-center justify-center text-3xl bg-gray-1-dark rounded-full"
                  @click.stop.prevent="isVideo1 = !isVideo1"
                >
                  <span class="material-icons">play_arrow</span>
                </BaseButton>
              </div>
            </div>
          </nuxt-link>
          <div v-if="isVideo1" class="">
            <video
              class="w-full rounded-xl"
              controls
              :src="courses[0].resource"
            ></video>
          </div>
          <nuxt-link
            :to="
              localePath({
                name: 'courses-courseId',
                params: { courseId: courses[1].id },
              })
            "
            class="block relative h-[540px] bg-[#121212] rounded-[10px] overflow-hidden mb-5"
          >
            <img
              class="w-[400px] h-[540px] -z-[0] absolute right-0 left-0"
              src="@/assets/home-img/cle.png"
              alt=""
            />

            <div class="flex items-center justify-between h-full z-20">
              <div
                class="text-label-primary-dark z-[1] w-[600px] flex justify-center"
              >
                <div class="">
                  <h1
                    class="font-cheltenham text-[56px] leading-[56px] font-bold mb-3"
                  >
                    {{ secondCourseAuthor }}
                  </h1>
                  <p
                    class="text-label-secondary-dark text-[15px] leading-5 font-medium mb-5"
                  >
                    {{ $t('soon') }}...
                  </p>
                  <p
                    class="max-w-[342px] text-[18px] leading-6 font-normal mb-10 line-clamp-3"
                  >
                    {{ courses[1].description }}
                  </p>
                  <div>
                    <BaseButton
                      size="large"
                      class="w-12 flex items-center justify-center text-3xl bg-gray-1-dark rounded-full"
                      @click.stop.prevent="isVideo2 = !isVideo2"
                    >
                      <span class="material-icons">play_arrow</span>
                    </BaseButton>
                    <BaseButton
                      size="large"
                      class="w-12 flex items-center justify-center text-3xl bg-gray-1-dark rounded-full"
                    >
                      <span class="material-icons">notifications</span>
                    </BaseButton>
                  </div>
                </div>
              </div>

              <div class="mask2 h-full">
                <img
                  class="h-full object-cover"
                  :src="courses[1].thumbnail"
                  alt="Cinque Terre"
                  width="586"
                />
              </div>
            </div>
          </nuxt-link>
          <div v-if="isVideo2" class="">
            <video
              class="w-full rounded-xl"
              controls
              :src="courses[1].resource"
            ></video>
          </div>
        </div>
      </div>

      <div
        class="h-[1px] w-full bg-white/[.1] mt-[40px] md:mt-[96px] mb-6"
      ></div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'HomeOurCourse',
  props: {
    courses: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      isVideo1: false,
      isVideo2: false,
      courseToShare: {},
      showShareModal: false,
    }
  },
  computed: {
    firstCourseAuthor() {
      return this.courses[0].author.profile.name
    },
    secondCourseAuthor() {
      return this.courses[1].author.profile.name
    },
  },
  methods: {
    handleCourseShare(course) {
      course.image = course.thumbnail
      this.courseToShare = course
      this.showShareModal = true
    },
    handleCloseShareModal() {
      this.showShareModal = false
      this.courseToShare = {}
    },
  },
}
</script>

<style lang="scss" scoped>
.mask1 {
  -webkit-mask-image: url('@/assets/home-img/mask.png');
  mask-image: url('@/assets/home-img/mask.png');
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
}
.mask2 {
  -webkit-mask-image: url('@/assets/home-img/mask2.png');
  mask-image: url('@/assets/home-img/mask2.png');
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
}
</style>
