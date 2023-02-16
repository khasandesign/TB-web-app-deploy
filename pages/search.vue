<template>
  <div class="dark:text-label-primary-dark pt-16 px-4 md:px-0">
    <section class="lg:w-8/12 2xl:w-1/2">
      <template v-if="results.lessons.length > 0">
        <h4 class="h4">{{ $t('lessons') }}</h4>
        <section class="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <LessonCard
            v-for="lesson in results.lessons"
            :key="lesson.id"
            :lesson="lesson"
          />
        </section>
      </template>
      <template v-if="results.courses.length > 0">
        <div class="divider mt-14 mb-5"></div>
        <h4 class="h4">{{ $t('courses') }}</h4>
        <section class="mt-7 space-y-4">
          <CourseCard
            v-for="(course, index) in results.courses"
            :key="course.id"
            :course="course"
            :mask-type="index % 2 === 0 ? 1 : 2"
          />
        </section>
      </template>
    </section>
    <section v-if="results.articles.length > 0" class="lg:w-10/12">
      <div class="divider mt-14 mb-5"></div>
      <h4 class="h4">{{ $t('articles') }}</h4>
      <section
        class="mt-7 grid grid-cols-1 xl:grid-cols-2 3xl:grid-cols-3 gap-6"
      >
        <ArticleCard
          v-for="article in results.articles"
          :key="article.id"
          :article="article"
        />
      </section>
    </section>
  </div>
</template>

<script>
import LessonCard from '~/components/lesson/LessonCard.vue'
export default {
  name: 'SearchPage',
  components: { LessonCard },
  async asyncData({ $axios, query }) {
    if (!query.text) {
      return {}
    }
    const { data } = await $axios.get('search', { params: { q: query.text } })
    return { results: data }
  },
  data() {
    return {
      results: {
        articles: [],
        lessons: [],
        courses: [],
      },
    }
  },
  head() {
    return {
      title: `${this.$t('search')} - "${this.$route.query.text}"`,
    }
  },
  watch: {
    async '$route.query.text'() {
      const { data } = await this.$axios.get('search', {
        params: { q: this.$route.query.text },
      })

      this.results = data
    },
  },
}
</script>
