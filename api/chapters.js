export const CHAPTERS = {
  GET: {
    method: 'get',
    url: (id) => `courses/${id}/chapters`,
    schema: {
      id: 'id',
      name: 'name',
      resource: 'resource',
      courseIndex: 'courseIndex',
      statusId: 'statusId',
      courseId: 'courseId',
      lessons: 'lessons',
    },
  },
}
