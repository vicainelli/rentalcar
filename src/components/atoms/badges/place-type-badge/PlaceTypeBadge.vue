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

const validator = {
  types: ['A', 'C', 'D', 'S'],
}

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
  s: {
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
      validator: (value) => validator.types.includes(value),
    },
  },
  computed: {
    placeThemeClass: function () {
      return placeTypes[this.placeType.toLowerCase()].theme
    },
    placeName: function () {
      return placeTypes[this.placeType.toLowerCase()].name
    },
  },
}
</script>
