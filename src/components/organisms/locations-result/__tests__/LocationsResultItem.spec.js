import { screen, render } from '@testing-library/vue'
import LocationsResultItem from '../LocationsResultItem.vue'

const location = {
  country: 'Netherlands',
  lng: 4.7641,
  city: 'Amsterdam',
  searchType: 'L',
  alternative: ['NL,Schiphol'],
  index: 1,
  bookingId: 'airport-18491',
  placeType: 'A',
  placeKey: '1472510',
  iata: 'AMS',
  countryIso: 'nl',
  locationId: '18491',
  name: 'Amsterdam Schiphol Airport',
  ufi: 900038538,
  isPopular: false,
  region: 'Noord-Holland',
  lang: 'en',
  lat: 52.3113,
}

describe('LocationsResultItem', () => {
  it('should render component with all data', () => {
    render(LocationsResultItem, {
      props: {
        location,
      },
    })
    expect(screen.getByTestId(`location_item_${location.bookingId}`)).toBeInTheDocument()
    expect(screen.getByTestId(`place_type_badge_${location.placeType}_${location.bookingId}`)).toBeInTheDocument()
    expect(screen.getByText(location.name)).toBeInTheDocument()
    expect(screen.getByText(`${location.city}, ${location.region}, ${location.country}`)).toBeInTheDocument()
  })
})
