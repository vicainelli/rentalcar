import { location } from '@/api'

const state = {
  isLoading: false,
  hasNoResults: true,
  locations: [],
}

const getters = {}

const actions = {
  fetchLocation: async ({ commit }, payload) => {
    const { term, solrRows } = payload
    commit('SET_NO_RESULTS', true)
    commit('SET_LOADING', true)
    return await location
      .getAll(term, solrRows)
      .then((res) => {
        if (res.results.numFound >= 1) {
          commit('SET_NO_RESULTS', false)
          commit('SET_LOCATIONS', res.results.docs.slice(0, 6))
        }
        commit('SET_LOADING', false)
      })
      .catch((error) => {
        commit('SET_LOADING', false)
        throw error
      })
  },
  updateHasNoResultStatus: ({ commit }, payload) => {
    commit('SET_NO_RESULTS', payload)
  },
}

const mutations = {
  SET_LOCATIONS: (state, payload) => (state.locations = payload),
  SET_LOADING: (state, payload) => (state.isLoading = payload),
  SET_NO_RESULTS: (state, payload) => (state.hasNoResults = payload),
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
