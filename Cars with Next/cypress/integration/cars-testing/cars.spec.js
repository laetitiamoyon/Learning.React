/// <reference types="cypress" />

describe('Cars', () => {
  it('should navigate to the home page', () => {
    cy.visit('http://localhost:3000/');
  })

  it('should have 3 cars', () => cy.get('[class*=index_linkContent]').should('have.length', 3))

  it('then click on here should have description car', () =>
  {
    cy.get('a[href*="/E40012456"]').click()
    cy.get('[class*=CarSlider_container]').should('be.visible')
  })

  it('then click on next arrow have the next photo', () =>
  {
    cy.get('[class*=CarSlider_leftArrow]').click({ multiple: true })
    cy.get('[class*=CarSlider_fullPhotos]').should('be.visible')
  })

  it('then click on return button have the home page', () =>
  {
    cy.get('a[href*="/"]').click()
    cy.get('[class*=index_container]').should('be.visible')
  })
})

export { }
