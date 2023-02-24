export const state = () => ({
  searchText: '',
  infoMenu: {
    common: [
      {
        to: '/contacts',
        key: 'contacts',
      },
      {
        to: '/faq',
        key: 'faq.title',
      },
      {
        name: 'Новости',
        to: '/news',
        key: 'contact.news',
      },
      {
        to: '/purchasing',
        key: 'contact.buyCourse',
      },
    ],
    formal: [
      {
        to: '/terms',
        key: 'footer.termsOfUsage',
      },
      {
        to: '/privacy',
        key: 'footer.policyShort',
      },
      {
        to: '/chat',
        key: 'footer.supportChat',
      },
    ],
  },
  socialNetworks: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    telegram: 'https://t.me',
    youtube: 'https://youtube.com',
  },
})

export const mutations = {
  SET_SEARCH_TEXT(state, value) {
    state.searchText = value
  },
}

export const actions = {
  // nuxtServerInit({ commit }, { req }) {
  //   if (req.headers.host) {
  //     commit('ui/SET_DOMAIN', req.headers.host)
  //   }
  // },
}
