import axios from 'axios'

const END_POINT = process.env.VUE_APP_LOCATION_AUTOCOMPLETE_API_URL

export default {
  /**
   * @param term
   * @param solrRows
   * @return Object
   */
  getAll: async (term, solrRows) => {
    const response = await axios.get(`${END_POINT}?solrIndex=fts_en&solrRows=${solrRows}&solrTerm=${term}`)
    return response.data
  },
}
