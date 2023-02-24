import get from "lodash.get";
import queryBuilder from '../services/queryBuilder'

export const state = () => ({
    courses: {
        all: {
            items: [],
            isFetched: false,
            meta: {}
        },
    },
    feedbacks: {
        all: {
            items: [],
            isFetched: false,
            meta: {}
        },
    },
})

export const actions = {
    loadAll({
                state,
                commit,
                rootState
            }, {
                url,
                entity,
                name,
                params,
                appendData = false,
                prependData = false,
                dataKey = 'items',
                metaKey = 'meta',
                cb = {
                    success: () => {
                    },
                    error: () => {
                    },
                }
            }) {
        commit('LOAD_ALL_REQUEST', {
            entity,
            name
        })
        const token = get(rootState, 'auth.profile.access_token')
        const cookieToken = this.$cookies.get("access_token")

        const config = (cookieToken || token) ? {
            headers: {
                Authorization: `Bearer ${cookieToken || token}`,
            }
        } : {}
        return this.$axios.$get(queryBuilder(url, params), config).then((response) => {
            commit('LOAD_ALL_SUCCESS', {
                entity,
                name,
                appendData,
                prependData,
                data: response,
                meta: typeof metaKey === 'function'
                    ? metaKey(response)
                    : response[metaKey]
            })
            cb.success(response)
        }).catch((errors) => {
            if(cb.error){
                cb.error(errors)
            }
            commit('LOAD_ALL_FAILURE', {
                entity,
                name
            })
        })
    },
}
export const mutations = {
    // ------- LOAD ALL MUTATIONS -------
    LOAD_ALL_REQUEST(state, {
        entity,
        name
    }) {
        state[entity] = {
            ...state[entity],
            [name]: {
                items: get(state, `${entity}.${name}.items`, []),
                isFetched: false,
                meta: get(state, `${entity}.${name}.meta`, {})
            }
        }
    },
    LOAD_ALL_SUCCESS(state, {
        entity,
        name,
        appendData,
        prependData,
        data,
        meta
    }) {
        let items = []
        if (appendData) {
            const oldItems = state[entity][name].items
            items = Array.isArray(oldItems) ? [...oldItems, ...data] : [...data]
        } else if (prependData) {
            const oldItems = state[entity][name].items
            items = Array.isArray(oldItems) ? [...data, ...oldItems] : [...data]
        } else {
            items = data
        }
        state[entity] = {
            ...state[entity],
            [name]: {
                items,
                isFetched: true,
                meta
            }
        }
    },
    LOAD_ALL_FAILURE(state, {
        entity,
        name
    }) {
        state[entity] = {
            [name]: {
                items: get(state, `${entity}.${name}.items`, []),
                isFetched: true,
                meta: get(state, `${entity}.${name}.meta`, {})
            }
        }
    },
}
export const getters = {
    getEntity(state) {
        return (entity, name) => get(state, `${entity}.${name}`)
    }
}
