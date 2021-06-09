import axios from 'axios'
import { location } from '@/api'
import * as locationsMock from '../../../tests/e2e/fixtures/locations.json'

jest.mock('axios')

describe('Location Autocomplete API', () => {
  it('calls axios and return the locations', async () => {
    axios.get.mockResolvedValue({
      data: locationsMock,
    })
    const result = await location.getAll('ams', 6)
    expect(result).toEqual(locationsMock)
    expect(axios.get).toHaveBeenCalledTimes(1)
  })
})
