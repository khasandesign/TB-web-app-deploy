export const PROFILE = {
  GET: {
    method: 'get',
    url: 'profile',
    schema: {
      id: 1,
      firstName: 'first_name',
      middleName: 'middle_name',
      lastName: 'last_name',
      email: 'email',
      avatar: 'avatar',
      userId: 'user_id',
      role: {
        id: 'role.id',
        name: 'role.name',
        description: 'role.description',
      },
    },
  },
  UPDATE: {
    method: 'put',
    url: 'profile',
    schema: {
      id: 'id',
      firstName: 'first_name',
      middleName: 'middle_name',
      lastName: 'last_name',
      email: 'email',
      avatar: 'avatar',
      userId: 'user_id',
      role: {
        id: 'role.id',
        name: 'role.name',
        description: 'role.description',
      },
    },
  },
}

export const CERTIFICATES = {
  method: 'get',
  url: 'user/certificates',
  schema: {
    id: 'id',
    image: 'resource',
    name: 'course.title',
    date: 'createdAt',
  },
}

export const LESSONS = {
  method: 'get',
  url: 'user/lessons',
  schema: {
    id: 'id',
    lesson: 'lesson',
    progress: 'progress',
    bookmark: 'bookmark',
    teacher: 'teacher',
  },
}

export const COURSES = {
  method: 'get',
  url: 'user/courses',
  schema: {
    id: 'id',
    author: 'author',
    image: 'image',
    lessonCount: 'lessonsCount',
    category: 'category',
    description: 'description',
    courseLength: 'courseLength',
  },
}
