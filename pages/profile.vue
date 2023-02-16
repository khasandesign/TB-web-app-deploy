<template>
  <div class="pt-6">
    <div v-if="role === 'admin'">
      <h1 class="mb-6 h6 text-[28px] font-bold leading-8">
        {{ $t('newComments') }}
      </h1>
      <div class="w-full">
        <BaseComments
          class="w-full"
          :comments="comments"
          role="admin"
          @add-comment="newComment"
        />
      </div>
    </div>
    <div v-else-if="role === 'student'">
      <div class="w-full">
        <ProfileCertificates
          v-if="$auth.user.certificates.length"
          :certificates="$auth.user.certificates"
        />
        <ProfileSavedLessons
          v-if="$auth.user.lessons.length"
          :saved-lessons="$auth.user.lessons"
        />
        <ProfileReadArticles
          v-if="$auth.user.articles.length"
          :read-articles="$auth.user.articles"
        />
        <ProfileCourses
          v-if="$auth.user.courses.length"
          :courses="$auth.user.courses"
        />
      </div>
    </div>
    <ProfileTeacher v-else-if="role === 'teacher'" />
  </div>
</template>

<script>
import ProfileTeacher from '~/components/profile/ProfileTeacher.vue'

export default {
  name: 'ProfilePage',
  components: { ProfileTeacher },
  layout: 'profileLayout',
  data() {
    return {
      comments: [
        {
          id: 1,
          author: {
            avatar: require('~/assets/images/commentator.png'),
            name: {
              firstName: 'KKomol',
              middleName: '',
              lastName: '',
            },
          },
          body: `Нет ребят я конечно все понимаю таких фильмов с похожим сюжетом пруд пруди,
но думаю именно этот стоит посмотреть :)`,
          createdAt: '2022-07-20T19:00:00.000Z',
        },
        {
          id: 2,
          author: {
            avatar: require('~/assets/images/commentator.png'),
            name: {
              firstName: 'Abdullokh',
              middleName: '',
              lastName: '',
            },
          },
          body: `Нет ребят я конечно все понимаю таких фильмов с похожим сюжетом пруд пруди,
но думаю именно этот стоит посмотреть :)`,
          createdAt: '2022-07-20T19:00:00.000Z',
        },
        {
          id: 3,
          author: {
            avatar: require('~/assets/images/commentator.png'),
            name: {
              firstName: 'Amaliya Cat',
              middleName: '',
              lastName: '',
            },
          },
          body: `Нет ребят я конечно все понимаю таких фильмов`,
          createdAt: '2022-07-20T19:00:00.000Z',
          replyId: 1,
        },
      ],
      readArticles: [
        {
          id: 1,
          title: 'Прогнозы трендов продаж на ближайшие пять лет',
          img: require('~/assets/images/article-image.png'),
          viewCount: 1376,
          url: '/article/2375',
        },
        {
          id: 2,
          title: 'Прогнозы трендов продаж на ближайшие пять лет',
          img: require('~/assets/images/article-image.png'),
          viewCount: 1245,
          url: '/article/2375',
        },
        {
          id: 4,
          title: 'Прогнозы трендов продаж на ближайшие пять лет',
          img: require('~/assets/images/article-image.png'),
          viewCount: 1245,
          url: '/article/2375',
        },
      ],
    }
  },
  head() {
    return {
      title: this.$t('user.profile'),
    }
  },
  computed: {
    role() {
      return this.$auth.user.profile.role.name
    },
  },
  methods: {
    fullName({ firstName, lastName, middleName }) {
      const first = firstName ? firstName + ' ' : ''
      const mid = middleName ? middleName + ' ' : ''
      const last = lastName ? lastName + ' ' : ''
      return first + mid + last
    },
    newComment(body, replyId) {
      const date = new Date()
      const sampleAuthor = {
        avatar: require('~/assets/images/profile.png'),
        name: {
          firstName: 'TopBreyns',
          middleName: '-',
          lastName: 'Поддержка',
        },
      }
      const id = this.comments.length + 1
      this.comments.push({
        id,
        author: sampleAuthor,
        body,
        createdAt: date,
        replyId,
      })
    },
  },
}
</script>
