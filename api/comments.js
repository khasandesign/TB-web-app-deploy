export const GET_COMMENTS = {
  method: 'get',
  url: (id) => `lesson/${id}/comments`,
  schema: {
    id: 'id',
    body: 'body',
    author: 'author',
    createdAt: 'createdAt',
    description: 'description',
    replyId: 'reply_id',
    userLessonId: 'user_lesson_id',
  },
}
export const POST_COMMENT = {
  method: 'post',
  url: (id) => `lesson/${id}/comments`,
  schema: {
    body: 'body',
    createdAt: 'createdAt',
    description: 'description',
    replyId: 'reply_id',
    userLessonId: 'user_lesson_id',
  },
}
