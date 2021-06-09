import { screen, render } from '@testing-library/vue'
import LocationsResultList from '../LocationsResultList.vue'
import * as locationsMock from '../../../../../tests/e2e/fixtures/locations.json'
const locations = locationsMock.docs

describe('LocationsResultList', () => {
  it('should render basic list of location suggestions', () => {
    render(LocationsResultList, {
      props: {
        locations,
      },
    })

    expect(screen.getByTestId('locations_results_list'))
  })

  it('should render the correct item list', () => {
    render(LocationsResultList, {
      props: {
        locations,
      },
    })
    const firstItem = screen.getByTestId(`location_item_${locations[0].bookingId}`)
    expect(firstItem).toBeInTheDocument()
  })

  it('should render "no results"', () => {
    render(LocationsResultList, {
      props: {
        locations: [],
      },
    })
    expect(screen.getByTestId('location_no_results'))
  })
})
