<template>
  <span
    :data-test-id="id"
    class="block text-white text-center py-1 text-xs font-bold rounded"
    :class="[placeThemeClass]"
  >
    {{ placeName }}
  </span>
</template>

<script>
import { hashId } from '@/utils/generators'

const placeTypes = {
  a: {
    name: 'Airport',
    theme: 'bg-red-800',
  },
  c: {
    name: 'City',
    theme: 'bg-rental-blue-500',
  },
  d: {
    name: 'District',
    theme: 'bg-rental-green-500',
  },
  t: {
    name: 'Station',
    theme: 'bg-gray-800',
  },
}

export default {
  name: 'place-type-badge',
  props: {
    id: {
      type: String,
      default: hashId(8),
    },
    placeType: {
      type: String,
      required: true,
    },
  },
  computed: {
    placeThemeClass: function () {
      if (placeTypes[this.placeType.toLowerCase()]) return placeTypes[this.placeType.toLowerCase()].theme
      return 'bg-gray-200'
    },
    placeName: function () {
      if (placeTypes[this.placeType.toLowerCase()]) return placeTypes[this.placeType.toLowerCase()].name
      return this.placeType
    },
  },
}
</script>
