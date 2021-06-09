<template>
  <div class="home">
    <div class="bg-rental-blue-500 lg:pb-3 font-sans">
      <app-header />
      <div class="mb-2">
        <div>
          <h1 class="text-white text-3xl font-bold text-center">Car Hire – Search, Compare & Save</h1>
        </div>
      </div>

      <div class="flex flex-col">
        <div class="order-last lg:order-first my-2">
          <div>
            <div class="lg:flex lg:place-content-center">
              <div class="my-2 mx-4 text-white">
                <div class="flex place-content-center items-center">
                  <icon class="mr-2" size="lg" name="check" />
                  <span class="text-sm lg:text-lg">Free cancellations on most bookings</span>
                </div>
              </div>
              <div class="my-2 mx-4 text-white">
                <div class="flex place-content-center items-center">
                  <icon class="mr-2" size="lg" name="check" />
                  <span class="text-sm lg:text-lg">60,000+ locations</span>
                </div>
              </div>
              <div class="my-2 mx-4 text-white">
                <div class="flex place-content-center items-center">
                  <icon class="mr-2" size="lg" name="check" />
                  <span class="text-sm lg:text-lg">Customer support in 40+ languages</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full max-w-screen-lg mx-auto px-3">
          <div class="bg-rental-yellow-500 p-4 rounded-md">
            <div class="mb-4"><h2 class="text-lg font-extrabold">Let’s find your ideal car</h2></div>
            <div class="mb-4">
              <label for="searchbox-toolbox-drop-off-checkbox">
                <input
                  type="checkbox"
                  name="searchbox-toolbox-drop-off-checkbox"
                  id="searchbox-toolbox-drop-off-checkbox"
                />
                <span class="ml-2">Drop car off at different location</span>
              </label>

              <label class="ml-8 hidden lg:inline-block" for="input-checkbox-drivers-age-large-screens">
                <input
                  checked
                  type="checkbox"
                  name="input-checkbox-drivers-age-large-screens"
                  id="input-checkbox-drivers-age-large-screens"
                />
                <span class="ml-2">Driver aged 30 – 65?</span>
              </label>
            </div>

            <div class="grid grid-cols-2 lg:grid-cols-8 gap-2">
              <!-- Location -->
              <div class="col-span-2 lg:col-span-3 relative">
                <div
                  class="bg-white p-2 rounded border-2 border-yellow-700 border-opacity-0 flex items-center focus-within:shadow focus-within:border-opacity-50"
                >
                  <icon name="navigation" />
                  <input
                    aria-label="Search pick-up location"
                    data-test-id="search_location"
                    class="w-full mx-2 focus:outline-none border-0"
                    type="text"
                    placeholder="Pick-up Location"
                    name="searchbox-toolbox-fts"
                    id="searchbox"
                    v-model="searchQuery"
                    @keyup="searchLocation"
                    @focusin="handleSearchFocus"
                  />
                  <div class="w-6 h-6" v-if="isLoading"><loading-spinner size="sm" /></div>
                </div>

                <!--    SEARCH RESULTS -->
                <div
                  data-test-id="locations_results"
                  class="absolute bg-white w-full border border-gray-800 rounded"
                  v-if="showResults && !isLoading"
                >
                  <locations-result-list
                    @click="setPickUpLocation"
                    :has-no-results="hasNoResults"
                    :locations="locations"
                  />
                </div>
              </div>
              <!-- Pick Up Date -->
              <div class="col-span-1 lg:col-span-2">
                <div class="lg:flex">
                  <div
                    class="w-full bg-white p-2 rounded lg:rounded-r-none border-2 border-yellow-700 border-opacity-0 flex items-center focus-within:shadow focus-within:border-opacity-50"
                  >
                    <icon name="calendar" />
                    <input
                      class="w-20 ml-2 focus:outline-none"
                      aria-label="Pick-Up Date"
                      type="text"
                      value="Sun 13 Jun"
                      name=""
                      id="pick_up_date"
                    />
                  </div>
                  <div
                    class="w-auto mt-2 lg:mt-0 bg-white p-2 rounded lg:rounded-l-none border-2 border-yellow-700 border-opacity-0 flex items-center focus-within:shadow focus-within:border-opacity-50"
                  >
                    <icon name="clock" />
                    <input
                      class="w-16 ml-2 focus:outline-none"
                      aria-label="Pick-Up Time"
                      type="text"
                      value="10:00"
                      name="pick_up_time"
                      id="pick_up_time"
                    />
                  </div>
                </div>
              </div>
              <div class="col-span-1 lg:col-span-2">
                <div class="lg:flex">
                  <div
                    class="w-full bg-white p-2 rounded lg:rounded-r-none border-2 border-yellow-700 border-opacity-0 flex items-center focus-within:shadow focus-within:border-opacity-50"
                  >
                    <icon name="calendar" />
                    <input
                      class="w-20 ml-2 focus:outline-none"
                      aria-label="Drop off date"
                      type="text"
                      value="Sun 13 Jun"
                      name=""
                      id="drop_of_date"
                    />
                  </div>
                  <div
                    class="w-auto mt-2 lg:mt-0 bg-white p-2 rounded lg:rounded-l-none border-2 border-yellow-700 border-opacity-0 flex items-center focus-within:shadow focus-within:border-opacity-50"
                  >
                    <icon name="clock" />
                    <input
                      class="w-16 ml-2 focus:outline-none"
                      aria-label="Drop off Time"
                      type="text"
                      value="10:00"
                      name=""
                      id="drop_of_time"
                    />
                  </div>
                </div>
              </div>

              <div class="col-span-2 my-3 lg:hidden">
                <label for="input-checkbox-drivers-age-small-screens">
                  <input
                    checked
                    type="checkbox"
                    name="input-checkbox-drivers-age-small-screens"
                    id="input-checkbox-drivers-age-small-screens"
                  />
                  <span class="ml-2">Driver aged 30 – 65?</span>
                </label>
              </div>

              <div class="col-span-2 lg:col-span-1">
                <button
                  class="w-full text-center bg-rental-green-500 text-white rounded px-3 py-3 text-sm"
                  type="submit"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <app-brand-section />
    <app-features-section />
  </div>
</template>

<script>
import AppHeader from '../templates/layout/AppHeader'
import AppBrandSection from '../templates/layout/AppBrandSection'
import AppFeaturesSection from '../templates/layout/AppFeaturesSection'
import Icon from '../atoms/icon/Icon.vue'
import { Spinner } from '../atoms/loading'
import LocationsResultList from '../organisms/locations-result/LocationsResultList'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'home',
  components: {
    'app-header': AppHeader,
    'app-brand-section': AppBrandSection,
    'app-features-section': AppFeaturesSection,
    icon: Icon,
    'locations-result-list': LocationsResultList,
    'loading-spinner': Spinner,
  },
  data: () => ({
    searchQuery: '',
    timeout: null,
    showResults: false,
  }),
  computed: {
    ...mapState('Location', {
      isLoading: (state) => state.isLoading,
      locations: (state) => state.locations,
      hasNoResults: (state) => state.hasNoResults,
    }),
  },
  methods: {
    ...mapActions('Location', ['fetchLocation', 'updateHasNoResultStatus']),
    searchLocation: function () {
      clearTimeout(this.timeout)
      const self = this

      this.timeout = setTimeout(function () {
        const queryTermSize = self.searchQuery.split('').length
        if (queryTermSize >= 2) {
          self.showResults = true
          return self.fetchLocation({ term: self.searchQuery, prefLang: 'en', cor: 'NL', domain: 'rc.com' })
        }
        self.showResults = false
        self.updateHasNoResultStatus(false)
      }, 650)
    },
    setPickUpLocation(e) {
      // Close search
      this.showResults = false
      const airportAbbr = e.iata ? `(${e.iata})` : ''

      // Fill Input with the value
      this.searchQuery = `${e.name} ${airportAbbr}, ${e.city}, ${e.country}`
    },
    handleSearchFocus: function (e) {
      if (e.type === 'focusin' && !this.hasNoResults) this.showResults = true
    },
  },
}
</script>
