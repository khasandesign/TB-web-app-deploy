<template>
  <div class="w-full h-screen flex items-center overflow-hidden">
    <BaseModal
      :show="show"
      class="pt-44 flex justify-center text-label-primary-dark"
    >
      <div class="container flexbox flex-col">
        <img
          src="https://thiscatdoesnotexist.com/"
          class="w-20 h-20 rounded-full mb-6"
          alt="top-brains-image"
        />
        <div
          class="flex flex-col items-center text-anime w-8/12 md:w-4/12"
          :style="{
            animationDelay: `${
              title.length * 110 + name.length * 110 + 1000
            }ms`,
          }"
        >
          <h1 :class="titleStyle">
            <span
              v-for="(letter, idx) in title"
              :key="idx + 1"
              class="anime-span block"
              :style="{ animationDelay: `${(idx + 1) * 110}ms` }"
            >
              {{ letter === ' ' ? '&nbsp;' : letter }}
            </span>
          </h1>
          <h1 :class="titleStyle">
            <span
              v-for="(letter, idx) in congratText"
              :key="idx + 1"
              class="anime-span block"
              :style="{
                animationDelay: `${name.length * 110 + (idx + 1) * 110}ms`,
              }"
            >
              {{ letter }}
            </span>
          </h1>
        </div>
        <div
          class="flex flex-col items-center text-center w-full md:w-8/12 lg:w-6/12"
        >
          <h1
            :class="titleStyle"
            class="justify-center flex-wrap mb-5 md:mb-7 lg:mb-10 text-center"
          >
            <span
              v-for="(letter, idx) in fullEnd"
              :key="idx + 1"
              class="anime-span block"
              :style="{
                animationDelay: `${
                  (title.length + name.length) * 110 + (idx + 1) * 110 + 3000
                }ms`,
              }"
            >
              {{ letter }}&nbsp;
            </span>
          </h1>
          <h1
            :class="titleStyle"
            class="justify-center flex-wrap text-center text-[#FFFFFF66]"
          >
            <span
              v-for="(letter, idx) in courseDesc.split(' ')"
              :key="idx + 1"
              class="anime-span block"
              :style="{
                animationDelay: `${
                  (title.length + name.length) * 110 + (idx + 1) * 110 + 4000
                }ms`,
              }"
            >
              {{ letter }}&nbsp;
            </span>
          </h1>
        </div>
      </div>
    </BaseModal>
    <video
      src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      controls
      poster="https://tiny.one/bigbuck"
      class="vid-anime w-full h-auto lg:h-full"
      :style="{
        animationDelay: `${
          (title.length +
            name.length +
            fullEnd.length +
            courseDesc.split(' ').length) *
            110 +
          5000
        }ms`,
      }"
    ></video>
  </div>
</template>

<script>
export default {
  name: 'CourseFinish',
  layout: 'empty',
  data() {
    return {
      show: true,
      name: 'Khasan Rashidov',
      courseDesc: 'Продавайте своим клиентам на новом уровне — Daniel Pink',
    }
  },
  computed: {
    title() {
      return [...this.name, ',']
    },
    congratText() {
      return [...this.$t('congrat')]
    },
    fullEnd() {
      return this.$t('finishCourse').split(' ')
    },
    titleStyle() {
      return 'text-2xl leading-7 md:text-5xl md:leading-[52px] font-bold flex'
    },
  },
  mounted() {
    const time =
      (this.title.length +
        this.name.length +
        this.fullEnd.length +
        this.courseDesc.split(' ').length) *
        110 +
      5000

    setTimeout(() => {
      this.show = false
    }, time)
  },
  methods: {
    close() {
      this.show = false
    },
  },
}
</script>

<style scoped>
.anime-span {
  animation: fade 1s 1 linear forwards;
  opacity: 0;
}

.text-anime {
  animation: hide-animation 2s 1 linear forwards;
}

.vid-anime {
  animation: fade 1s 1 linear forwards;
  opacity: 0;
}

@keyframes fade {
  from {
    opacity: 0;
    transform: translateY(40px);
  }

  to {
    opacity: 1;
  }
}

@keyframes hide-animation {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    visibility: hidden;
    width: 0;
    height: 0;
  }
}
</style>
