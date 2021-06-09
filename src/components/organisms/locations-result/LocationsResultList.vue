<template>
  <div>
    <div data-test-id="location_no_results" v-if="hasNoResults && locations.length <= 0">
      <div class="p-2 text-gray-700">No results found.</div>
    </div>
    <ul v-else data-test-id="locations_results_list">
      <li
        v-for="(location, index) in locations"
        :key="index"
        class="p-2"
        :class="{ 'border-b border-gray-300': index != locations.length - 1 }"
        @click="$emit('click', location)"
      >
        <locations-result-item :location="location" />
      </li>
    </ul>
  </div>
</template>

<script>
import LocationsResultItem from './LocationsResultItem'
export default {
  name: 'locations-result-list',
  components: {
    'locations-result-item': LocationsResultItem,
  },
  props: {
    locations: {
      type: Array,
      required: true,
    },
    hasNoResults: {
      type: Boolean,
      default: true,
    },
  },
}
</script>
