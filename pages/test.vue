<template>
  <div>
    <CourseFinishedNotification :notification-details="notificationDetails" />
  </div>
</template>

<script>
import CourseFinishedNotification from '~/components/course/CourseFinishedNotification.vue'

export default {
  name: 'TemporaryPage',
  components: { CourseFinishedNotification },
  data() {
    return {
      notificationDetails: {
        studentName: 'Хасан',
        authorName: 'Daniel Pink',
        courseTitle: 'Продавайте своим клиентам на новом уровне',
        courseId: 1,
      },
    }
  },
}
</script>
