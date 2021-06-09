import { render, screen } from '@testing-library/vue'
import PlaceTypeBadge from '../PlaceTypeBadge.vue'
import { hashId } from '@/utils/generators'

describe('PlaceTypeBadge', () => {
  it('render place badge for Airport', () => {
    const id = hashId(6)
    render(PlaceTypeBadge, { props: { id: `place_type_badge_airport_${id}`, placeType: 'A' } })

    const el = screen.getByTestId(`place_type_badge_airport_${id}`)

    expect(el).toBeInTheDocument()
    expect(el).toHaveTextContent('Airport')
    expect(el).toHaveClass('bg-red-800')
  })
  it('render place badge for City', () => {
    const id = hashId(6)
    render(PlaceTypeBadge, { props: { id: `place_type_badge_city_${id}`, placeType: 'C' } })

    const el = screen.getByTestId(`place_type_badge_city_${id}`)

    expect(el).toBeInTheDocument()
    expect(el).toHaveTextContent('City')
    expect(el).toHaveClass('bg-rental-blue-500')
  })
  it('render place badge for District', () => {
    const id = hashId(6)
    render(PlaceTypeBadge, { props: { id: `place_type_badge_district_${id}`, placeType: 'D' } })

    const el = screen.getByTestId(`place_type_badge_district_${id}`)

    expect(el).toBeInTheDocument()
    expect(el).toHaveTextContent('District')
    expect(el).toHaveClass('bg-rental-green-500')
  })
  it('render place badge for Station', () => {
    const id = hashId(6)
    render(PlaceTypeBadge, { props: { id: `place_type_badge_station_${id}`, placeType: 'T' } })

    const el = screen.getByTestId(`place_type_badge_station_${id}`)

    expect(el).toBeInTheDocument()
    expect(el).toHaveTextContent('Station')
    expect(el).toHaveClass('bg-gray-800')
  })
})
