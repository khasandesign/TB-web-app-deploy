import { GET_COMMENTS } from '~/api/comments'

export const GET_LESSON = {
  method: 'get',
  url: (id) => `lessons/${id}`,
  schema: {
    id: 'id',
    chapterId: 'chapterId',
    title: 'title',
    resource: 'resource',
    description: 'description',
    duration: 'duration',
    chapterIndex: 'chapterIndex',
    statusId: 'statusId',
  },
}

export const getLessonRepository = ($axios) => ({
  get(id) {
    return $axios.$get(GET_LESSON.url(id), {
      progress: false,
    })
  },
  async getComments(lessonId, page, limit = 12) {
    return await $axios.$get(GET_COMMENTS.url(lessonId), {
      progress: false,
      query: { page, limit },
    })
  },
})
