import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import { configure } from '@testing-library/vue'

configure({
  testIdAttribute: 'data-test-id',
})
