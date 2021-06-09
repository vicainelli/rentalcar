import { render, screen } from '@testing-library/vue'
import Icon from '../Icon.vue'

describe('Icon component', () => {
  it('should render icon', () => {
    render(Icon, { props: { name: 'navigation' } })

    const el = screen.getByTestId('icon_navigation')

    expect(el).toBeInTheDocument()
    expect(el).toHaveClass('h-4 w-4')
    expect(el).toContainHTML('<g><polygon points="3 11 22 2 13 21 11 13 3 11" /></g>')
  })
})
