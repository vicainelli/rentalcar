describe('Rentalcars Home', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  describe('Basic Interface Elements', () => {
    it('should have the correct page title', () => {
      cy.title().should('eq', 'Cheap Car Hire, Compare Rental Prices - Rentalcars.com')
    })

    it('should have correct headings', () => {
      cy.get('h1').should('have.text', 'Car Hire – Search, Compare & Save')
      cy.get('h2').should('have.text', 'Let’s find your ideal car')
    })
  })

  describe('Pick-up Location', () => {
    it('should see a search form with a text input labelled “Pick-up Location”', () => {
      cy.get('[data-test-id="search_location"]').should('have.attr', 'placeholder', 'Pick-up Location')
      cy.get('[data-test-id="search_location"]').should('have.attr', 'aria-label', 'Search pick-up location')
    })
    // it('should I use the search box with a screen reader')
    it('should does not show the results when I enter a single alphanumeric character into the “Pick-up Location”', () => {
      cy.get('[data-test-id="search_location"]').focus()
      cy.get('[data-test-id="locations_results"]').should('not.be.visible')
      cy.get('[data-test-id="search_location"]').type('a')
      cy.get('[data-test-id="locations_results"]').should('not.be.visible')
    })
    it('should show the results when I enter two or more alphanumeric characters into the “Pick-up Location”', () => {
      cy.get('[data-test-id="search_location"]').type('ams').wait(1500)
      cy.get('[data-test-id="locations_results"]').should('exist')
    })
    it('should display six results show the results when I enter two or more alphanumeric characters into the “Pick-up Location”', () => {
      cy.get('[data-test-id="search_location"]').type('ams').wait(1500)
      cy.get('[data-test-id="locations_results"]').should('exist')
      cy.get('[data-test-id="locations_results_list"]').should('exist').find('li').should('have.length', 6)
    })
    it('should display "no results" when I enter "asdf1234", into the “Pick-up Location”', () => {
      cy.get('[data-test-id="search_location"]').type('asdf1234').wait(1500)
      cy.get('[data-test-id="locations_results"]').should('exist').should('contain.text', 'No results found.')
    })
    it('should not display the results list when already have it and let one character left into the “Pick-up Location”', () => {
      cy.get('[data-test-id="search_location"]').type('ams').wait(1500)
      cy.get('[data-test-id="locations_results"]').should('exist')
      cy.get('[data-test-id="search_location"]').type('{backspace}{backspace}').wait(1500)
      cy.get('[data-test-id="locations_results"]').should('not.exist')
    })

    it('should change the input value when click in one of the suggestions', () => {
      cy.get('[data-test-id="search_location"]').type('ams').wait(500)
      cy.get('[data-test-id="locations_results"]').should('exist')
      cy.get('[data-test-id="locations_results"] li').first().should('exist').click()
      cy.get('[data-test-id="search_location"]').should(
        'have.value',
        'Amsterdam Schiphol Airport (AMS), Amsterdam, Netherlands',
      )
    })

    it('should show the result list after click in one option and focus again on the input', () => {
      cy.get('[data-test-id="search_location"]').type('ams').wait(500)
      cy.get('[data-test-id="locations_results"]').should('exist')
      cy.get('[data-test-id="locations_results"] li').first().should('exist').click()
      cy.get('[data-test-id="search_location"]').focus()
      cy.get('[data-test-id="locations_results"]').should('exist')
    })

    it('should hide the results when click outside the input', () => {
      cy.get('[data-test-id="search_location"]').type('ams').wait(500)
      cy.get('[data-test-id="locations_results"]').should('exist')
      cy.get('h1').click(0, 0)
      cy.get('[data-test-id="locations_results"]').should('not.exist')
      cy.get('[data-test-id="search_location"]').focus()
      cy.get('[data-test-id="locations_results"]').should('exist')
    })
  })
})
