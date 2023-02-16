import { morphism } from 'morphism'

export const ARTICLE = {
  LIST: {
    method: 'get',
    url: 'articles',
    schema: {
      id: 'id',
      title: 'title',
      body: 'body',
      view: 'view',
      image: 'image',
      author_id: {
        id: 'id',
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
        profile: {
          firstName: 'firstName',
          lastName: 'lastName',
          middleName: 'middleName',
          email: 'email',
          avatar: 'avatar',
        },
      },
    },
  },
  ITEM: {
    method: 'get',
    url: 'article',
    schema: {
      info: {
        avatar: 'author.profile.avatar',
        firstName: 'author.profile.firstName',
        middleName: 'author.profile.middleName',
        lastName: 'author.profile.lastName',
        view: 'view',
        id: `author.id`,
      },
      article: {
        id: 'id',
        image: 'image',
        body: 'body',
        title: 'title',
      },
      recommend: {
        id: 'recommend.id',
        title: 'recommend.title',
        view: 'recommend.view',
        image: 'recommend.image',
      },
    },
  },
}

export const getArticleRepository = ($axios) => ({
  async getList(params) {
    const data = await $axios.$get(ARTICLE.LIST.url, {
      params,
      progress: false,
    })
    return morphism(ARTICLE.LIST.schema, data.items)
  },
})
