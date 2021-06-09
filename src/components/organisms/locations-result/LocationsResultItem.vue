<template>
  <div :data-test-id="`location_item_${location.bookingId}`">
    <div class="flex">
      <div class="w-20 mr-3">
        <place-type-badge
          :id="`place_type_badge_${location.placeType}_${location.bookingId}`"
          :place-type="location.placeType"
        />
      </div>
      <div>
        <div class="text-sm location-title">{{ locationTitle }}</div>
        <div class="text-xs location-subtext">
          {{ locationSubText }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PlaceTypeBadge from '../../atoms/badges/place-type-badge/PlaceTypeBadge'
export default {
  name: 'location-result-item',
  components: { PlaceTypeBadge },
  props: {
    location: {
      type: Object,
      required: true,
    },
  },
  computed: {
    locationTitle: function () {
      const iata = this.location.iata ? `(${this.location.iata})` : ''
      return `${this.location.name} ${iata}`
    },
    locationSubText: function () {
      const city = this.location.city ? `${this.location.city}, ` : ''
      const region = this.location.region ? `${this.location.region}, ` : ''
      const country = this.location.country ? `${this.location.country}` : ''
      return `${city}${region}${country}`
    },
  },
}
</script>

<style scoped></style>
