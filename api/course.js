import { morphism } from 'morphism'
import { CHAPTERS } from '~/api/chapters'

export const COURSE = {
  LIST: {
    method: 'get',
    url: 'courses/',
    schema: {
      id: 'id',
      title: 'title',
      description: 'description',
      thumbnail: 'thumbnail',
      author: 'author',
      lesson: 'lesson',
      hour: 'hour',
      body: 'body',
      image: 'image',
      video: 'video',
      resource: 'resource',
      trailer: 'trailer',
      price: 'price',
      specialOffer: 'specialOffer',
    },
  },
}

export const getCourseRepository = ($axios) => ({
  cancel(id) {
    return $axios.$post(`courses/${id}/cancel`)
  },
  getCourse(id) {
    return $axios.$get(`courses/${id}`, {
      progress: false,
    })
  },
  async getChapters(id) {
    const data = await $axios.$get(CHAPTERS.GET.url(id), {
      progress: false,
    })

    return morphism(CHAPTERS.GET.schema, data)
  },
})
