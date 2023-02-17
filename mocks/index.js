import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import { faker } from '@faker-js/faker'
import jwt from 'jsonwebtoken'
import { users } from './data/users'

const app = express()
app.use(bodyParser.json())
app.use(cookieParser())

export const MIN_SERVER_RESPONSE_TIME = 100
export const MAX_SERVER_RESPONSE_TIME = 400

const getRandomServerResponseTime = () => {
  return Math.floor(
    Math.random() * (MAX_SERVER_RESPONSE_TIME - MIN_SERVER_RESPONSE_TIME) +
      MIN_SERVER_RESPONSE_TIME
  )
}
// Add random delay to every response
app.use((req, res, next) => {
  setTimeout(next, getRandomServerResponseTime())
})

module.exports = { path: '/api', handler: app }

const articles = new Array(20).fill(undefined).map((_, index) => ({
  id: index + 1,
  title: faker.random.words(7),
  body: faker.random.words(132),
  image: faker.image.imageUrl(),
  view: faker.random.numeric(3),
  author: {
    id: faker.datatype.number(),
    createdAt: faker.datatype.datetime(),
    updatedAt: faker.datatype.datetime(),
    profile: {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      middleName: faker.name.middleName(),
      avatar: faker.image.imageUrl(48, 48),
    },
  },
}))

const profile = {
  id: 1,
  first_name: faker.name.firstName(),
  middle_name: faker.name.middleName(),
  last_name: faker.name.lastName(),
  email: faker.internet.email(),
  avatar: faker.internet.avatar(),
  user_id: faker.random.numeric(),
  role: {
    id: 1,
    name: 'teacher',
    description: 'teacher role',
  },
}

const authors = [
  {
    id: 1,
    createdAt: faker.date.past(),
    updatedAt: faker.date.past(),
    profile: {
      firstName: 'Daniel',
      middleName: 'H',
      lastName: 'Pink',
      name: 'Daniel Pink',
      email: 'press@danielpink.com',
      avatar: '/images/daniel-pink.webp',
      role: {
        id: 2,
        name: 'teacher',
        description: 'Teacher',
      },
    },
  },
  {
    id: 2,
    createdAt: faker.date.past(),
    updatedAt: faker.date.past(),
    profile: {
      firstName: 'Robert',
      middleName: 'L',
      lastName: 'Reffkin',
      name: 'Robert Reffkin',
      email: 'robertreffkin@gmail.com',
      avatar: '/images/robert-reffkin.webp',
      role: {
        id: 2,
        name: 'teacher',
        description: 'Teacher',
      },
    },
  },
]

const courses = [
  {
    id: 1,
    title: 'Продавайте своим клиентам на новом уровне',
    thumbnail: '/images/course-1-thumbnail.webp',
    description:
      'С четырьмя бестселлерами NYT Дэниел Пинкявляется влиятельным голосом в меняющемся ландшафте продаж и мотивации.',
    body: 'Сейчас автор книги "Продавать - это человек" учит научно обоснованные принципы эффективного и этичные продажи и убеждение. Изучите тактику для достижения лучших результатов в любом взаимодействии - дома или на работе - и инструменты для создания вашего сообщения.',
    author: authors[0],
    lesson: faker.random.numeric(1, 20),
    hour: faker.random.numeric(1, 20),
    resource: '/videos/daniel-pink.mp4',
    trailer: '/videos/daniel-pink.mp4',
    price: faker.random.numeric(6),
    specialOffer: {
      startedAt: faker.date.recent(),
      endedAt: faker.date.future(),
      discount: faker.datatype.number({ min: 10, max: 50 }),
    },
    duration: faker.random.numeric(2),
    totalLessons: faker.random.numeric(2),
    reviews: faker.random.numeric(3),
    students: faker.random.numeric(3),
    purchased: false,
    access: 'Umrbod',
    status: {
      id: faker.random.numeric(3),
      code: faker.random.numeric(8),
      name: faker.random.words(1),
      description: faker.random.words(20),
    },
    currency: {
      id: faker.random.numeric(2),
      country: faker.address.country(),
      name: 'sum',
      localName: "so'm",
      iso4217: 'iso4217',
    },
    language: {
      id: faker.random.numeric(2),
      name: faker.random.words(1),
      localName: 'uzbek',
      iso6391: 'iso_639_1',
    },
    url: 'http://topbrains.uz/courses/1',
  },
  {
    id: 2,
    title: 'Продажа и покупка недвижимости на высшем уровне',
    thumbnail: '/images/course-2-thumbnail.webp',
    description:
      'С четырьмя бестселлерами NYT Robert Reffkin является влиятельным голосом в меняющемся ландшафте продаж и мотивации.',
    body: faker.random.words(10),
    author: authors[1],
    lesson: faker.random.numeric(1, 20),
    hour: faker.random.numeric(1, 20),
    resource: '/videos/robert-reffkin.mp4',
    trailer: '/videos/robert-reffkin.mp4',
    price: faker.random.numeric(6),
    specialOffer: {
      startedAt: faker.date.recent(),
      endedAt: faker.date.future(),
      discount: faker.datatype.number({ min: 10, max: 50 }),
    },
    duration: faker.random.numeric(2),
    totalLessons: faker.random.numeric(2),
    reviews: faker.random.numeric(3),
    students: faker.random.numeric(3),
    purchased: true,
    access: 'Umrbod',
    status: {
      id: faker.random.numeric(3),
      code: faker.random.numeric(8),
      name: faker.random.words(1),
      description: faker.random.words(20),
    },
    currency: {
      id: faker.random.numeric(2),
      country: faker.address.country(),
      name: 'sum',
      localName: "so'm",
      iso4217: 'iso4217',
    },
    language: {
      id: faker.random.numeric(2),
      name: faker.random.words(1),
      localName: 'uzbek',
      iso6391: 'iso_639_1',
    },
    url: 'http://topbrains.uz/courses/2',
  },
]

const lessons = []

const chapters = new Array(3).fill(undefined).map((_, index) => {
  const lessonCount = faker.datatype.number({ min: 3, max: 5 })
  return {
    id: index + 1,
    name: faker.random.words(1),
    resource: faker.random.words(8),
    courseIndex: index + 1,
    statusId: faker.random.numeric(3),
    lessons: new Array(lessonCount).fill(undefined).map((_, lessonIndex) => {
      const lesson = {
        id: lessons.length + 1,
        chapterId: index + 1,
        chapterIndex: lessonIndex + 1,
        title: faker.random.words(3),
        resource: faker.random.words(8),
        description: faker.random.words(10),
        duration: faker.random.numeric(2) + 'min',
        statusId: faker.random.numeric(3),
        nextLessonId:
          index > 2 && lessonIndex === lessonCount - 1
            ? null
            : lessons.length + 2,
      }
      lessons.push(lesson)
      return lesson
    }),
  }
})

const comments = new Array(25).fill().map((_, index) => ({
  id: index + 1,
  body: faker.random.words(8),
  author: {
    avatar: faker.image.avatar(),
    name: {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      middleName: faker.name.middleName(),
    },
    profile: {
      role: {
        name: ['student', 'teacher', 'admin'][
          faker.datatype.number({ min: 0, max: 2 })
        ],
      },
    },
  },
  description: faker.random.words(10),
  createdAt: faker.date.recent(),
  replies: Array(faker.datatype.number({ min: 0, max: 2 }))
    .fill(undefined)
    .map(() => ({
      replyId: index + 1,
      body: faker.random.words(8),
      author: {
        avatar: faker.image.avatar(),
        name: {
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          middleName: faker.name.middleName(),
        },
        profile: {
          role: {
            name: ['student', 'teacher', 'admin'][
              faker.datatype.number({ min: 0, max: 2 })
            ],
          },
        },
      },
      description: faker.random.words(10),
      createdAt: faker.date.recent(),
    })),
  userLessonId: faker.datatype.number({ min: 1, max: 12 }),
}))

app.get('/courses', (req, res) => {
  res.send({ courses })
})

app.post('/login', (req, res) => {
  const body = req.body
  const user = users.find(
    (u) => u.profile.phoneNumber.value === body.phoneNumber
  )
  if (!user) {
    res.status(400)
    return res.send({ detail: 'Invalid credentials ' })
  }
  if (user.password !== body.password) {
    res.status(400)
    return res.send({ detail: 'Invalid credentials ' })
  }
  // Persist user's authentication in the session
  res.cookie('is-authenticated', true)
  res.cookie('user', JSON.stringify(user))
  res.send({
    accessToken: jwt.sign(user, 'secret1', { expiresIn: '1h' }),
    refreshToken: jwt.sign(user, 'secret1', { expiresIn: '24h' }),
  })
})

app.post('/logout', (req, res) => {
  res.send({ success: true })
})

app.get('/user', (req, res) => {
  // const isAuthenticated = sessionStorage.getItem('is-authenticated')
  const isAuthenticated = req.cookies['is-authenticated']
  if (!isAuthenticated) {
    res.status(401)
    return res.send({
      errorMessage: 'Not authorized',
    })
  }

  const user = JSON.parse(req.cookies.user)
  user.courses = courses.map((course) => ({
    ...course,
    result: `${faker.datatype.number({ min: 10, max: 90 })}%`,
  }))

  user.lessons = new Array(1).fill(undefined).map(() => ({
    id: faker.datatype.number(),
    lesson: {
      id: faker.datatype.number(),
      title: faker.random.words(4),
      resource: faker.image.people(),
      duration: faker.datatype.number(),
      courseId: faker.datatype.number({ min: 1, max: courses.length }),
    },
    teacher: {
      name: faker.name.findName(),
    },
    progress: faker.datatype.number({ min: 10, max: 90 }),
    bookmark: faker.datatype.boolean(),
  }))

  user.certificates = new Array(2).fill(undefined).map(() => ({
    id: faker.datatype.number({ min: 1, max: 10000 }),
    resource:
      'https://cdn.pixabay.com/photo/2017/09/18/05/23/certificate-2760736_1280.png',
    course: {
      title: faker.random.words(4),
    },
    createdAt: faker.date.recent(),
  }))
  user.articles = articles.slice(0, 2)

  res.send(user)
})

// Sign up routes
// -----------------------------------------------------------------------------------
app.post('/auth/send-code', async (req, res) => {
  const body = await req.body
  const code = Math.floor(Math.random() * (99999 - 11111 + 1) + 11111)
  res.cookie(body.phoneNumber, code)

  res.send({ code })
})
app.post('/auth/verify-code', async (req, res) => {
  const body = await req.body
  const code = req.cookies[body.phoneNumber]

  if (Number(code) !== Number(body.code)) {
    res.status(400)
    return res.send({ detail: 'Wrong code' })
  }

  res.send()
})

app.post('/auth/register', async (req, res) => {
  const body = await req.body
  const [firstName, middleName, lastName] = body.name.split(' ')
  users.push({
    id: faker.datatype.number({ min: users.length }),
    password: body.password,
    profile: {
      firstName,
      middleName,
      lastName,
      avatar: faker.image.avatar(),
      email: faker.internet.email(),
      role: {
        name: 'student',
      },
      phoneNumber: {
        countryCode: 'uz',
        localNumber: body.phoneNumber,
        value: body.phoneNumber,
      },
    },
  })

  res.send()
})
// -----------------------------------------------------------------------------------

// Articles
app.get('/articles', (req, res) => {
  const { page = 1, limit = 5 } = req.query
  const start = (page - 1) * limit
  const end = start + limit
  res.send({
    items: articles.slice(start, end),
    total: articles.length,
  })
})

app.get('/article/:id', (req, res) => {
  const id = Number(req.params.id)
  const response = articles.find((article) => article.id === id)

  if (!response) {
    res.status(404)
    return res.send({ detail: 'Article not found' })
  }
  const recommend = articles[response.id]

  res.send({ ...response, recommend })
})

// Profile
app.get('/profile', (req, res) => {
  res.send(profile)
})
app.put('/profile', (req, res) => {
  const body = req.body
  profile.first_name = body.firstName
  profile.last_name = body.lastName
  profile.middle_name = body.middleName
  profile.email = body.email

  res.send(profile)
})

// FAQ
app.get('/home-faq', (req, res) => {
  const homefaq = [
    {
      id: 1,
      title: 'Что такое TopBrains?',
      description:
        'TopBrains – это платформа с онлайн обучением по курсам от одних из лучших специолистов в своей сфере. TopBrains сама снимает курсы и имеет свою команду монтажеров, таким образом мы гарантируем вам высокий уровень видео уроков и приятный и постепенный процесс обучения от наших менторов. ',
    },

    {
      id: 2,
      title: 'Что вы получите при покупке курса?',
      description:
        'Для получения доступа к курсу необходимо пройти процедуру авторизации на сайте. ',
    },
    {
      id: 3,
      title: 'Как оплатить курс?',
      description:
        'Оплата производится в момент подтверждения заказа на сайте. ',
    },
    {
      id: 4,
      title: 'Как вернуть деньги за курс?',
      description:
        'Возврат денег за курс возможен в течение 14 дней после оплаты. ',
    },
    {
      id: 5,
      title: 'Как смотреть курс?',
      description:
        'При покупке курса вы получите доступ к видео курсам и практическим заданиям. Вы также получите доступ к обучающей информации и ответам на вопросы от наших менторов. ',
    },
    {
      id: 6,
      title: 'Где задать свой вопрос?',
      description:
        'Вы можете задать вопрос на сайте или по телефону по номеру +998 00 000 00 00. Мы ответим на ваш вопрос в течение 24 часов. ',
    },
  ]

  res.send(homefaq)
})

app.get('/feedback', (req, res) => {
  const feedback = new Array(6).fill(undefined).map((_, index) => ({
    id: index + 1,
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    description: faker.random.words(10),
    image: faker.image.avatar(),
  }))

  return res.send({ feedback })
})

app.get('/courses/:id', (req, res) => {
  const course = courses.find((item) => item.id === +req.params.id)
  if (!course) {
    res.status(404)
    return res.send({ detail: 'Course not found' })
  }
  course.chapters = chapters
  res.send(course)
})

// course chapters
app.get('/courses/:id/chapters', (req, res) => {
  const chapterWithLessonIndex = chapters.map((chapter, index) => ({
    ...chapter,
    lessons: chapter.lessons.map((lesson, lessonIndex) => ({
      ...lesson,
      index:
        chapters
          .slice(0, index)
          .map(({ lessons }) => lessons.length)
          .reduce((acc, item) => acc + item, 0) +
        lessonIndex +
        1,
    })),
  }))
  res.send(chapterWithLessonIndex)
})

// Get one lesson by ID
app.get('/lessons/:id', (req, res) => {
  const lesson = lessons.find((l) => l.id === +req.params.id)
  if (!lesson) {
    res.status(404)
    return res.send({ detail: 'Lesson not found' })
  }
  const chapter = chapters.find(({ id }) => id === lesson.chapterId)
  lesson.index =
    chapters
      .slice(0, chapter.courseIndex - 1)
      .map(({ lessons }) => lessons.length)
      .reduce((acc, item) => acc + item, 0) + lesson.chapterIndex
  lesson.nextLessonId = lesson.id === lessons.length ? null : lesson.id + 1
  res.send(lesson)
})
app.get('/lesson/:id/comments', (req, res) => {
  const { page = 1, limit = 12 } = req.query
  const start = (page - 1) * limit
  const end = start + limit
  res.send({
    items: comments.slice(start, end),
    total: comments.length,
  })
})
app.post('/lesson/:id/comments', (req, res) => {
  const comment = []
  comment.push(req.body)
  res.send({ data: req.body })
})

app.post('/collaboration', (req, res) => {
  const collaborations = []
  collaborations.push(req.body)
  res.send({ data: req.body })
})

app.get('/courses/:id/certificate', (req, res) => {
  res.send({
    image:
      'https://packagingschool.com/wp-content/uploads/2019/09/Packaging-School-Blank-CPS-Julie-Suggs.png',
    url: 'https://packagingschool.com/wp-content/uploads/2019/09/Packaging-School-Blank-CPS-Julie-Suggs.png',
    course: {
      id: faker.datatype.number(),
      title: faker.random.words(4),
      author: {
        id: faker.datatype.number(),
        profile: {
          name: faker.name.findName(),
          avatar: faker.image.avatar(),
        },
      },
    },
  })
})

app.post('/courses/:id/certificate', (req, res) => {
  res.send()
})

app.post('/courses/:id/cancel', (req, res) => {
  res.send()
})

app.get('/search', (req, res) => {
  const lessons = new Array(12).fill().map(() => ({
    id: faker.datatype.number(),
    chapterId: faker.datatype.number({ min: 1, max: 3 }),
    title: faker.random.words(3),
    resource: faker.random.words(8),
    description: faker.random.words(10),
    chapterIndex: faker.random.numeric(3),
    statusId: faker.random.numeric(3),
    result: faker.datatype.number({ min: 10, max: 90 }),
    image: faker.image.avatar(),
  }))

  res.send({
    articles: articles.slice(
      0,
      faker.datatype.number({ min: 0, max: articles.length / 2 })
    ),
    courses: courses.slice(
      0,
      faker.datatype.number({ min: 0, max: courses.length })
    ),
    lessons: lessons.slice(
      0,
      faker.datatype.number({ min: 0, max: lessons.length })
    ),
  })
})

app.get('/certificates/:id', (req, res) => {
  const courseIndex = faker.datatype.number({ min: 0, max: 1 })
  res.send({
    id: faker.datatype.number({ min: 1, max: 10000 }),
    resource:
      'https://cdn.pixabay.com/photo/2017/09/18/05/23/certificate-2760736_1280.png',
    course: courses[courseIndex],
    courseId: courses[courseIndex].id,
    createdAt: faker.date.recent(),
  })
})

app.post('/reset-password', (req, res) => {
  if (!req.body.phoneNumber) {
    res.status(400)
    res.send({ detail: 'Phone number is required' })
    return
  }

  const user = users.find(
    (user) =>
      user.profile.phoneNumber.value === req.body.phoneNumber.replace('+', '')
  )
  if (!user) {
    res.status(400)
    res.send({ detail: 'User with this phone number not found' })
    return
  }
  res.send()
})

app.post('/reset-password/change', (req, res) => {
  res.send()
})
