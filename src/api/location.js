import axios from 'axios'

const END_POINT = process.env.VUE_APP_LOCATION_AUTOCOMPLETE_API_URL

export default {
  /**
   * @param term
   * @param prefLang
   * @param cor
   * @param domain
   * @return Object
   */
  getAll: async (term, prefLang, cor, domain) => {
    const response = await axios.get(`${END_POINT}?domain=${domain}&cor=${cor}&preflang=${prefLang}&term=${term}`)
    return response.data
  },
}
