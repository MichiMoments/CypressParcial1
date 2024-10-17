/// <reference types="cypress" />

context('Amazon', () => {
    beforeEach(() => {
      cy.visit('https://www.amazon.com/')
    })

    it('Mirar si es visible el search  bar', () => {
        cy.get('#twotabsearchtextbox').should('be.visible')
    })
  
    it('Encuentra el login', () => {
        cy.get('#nav-link-accountList').click()
        cy.url().should('include', 'ap/signin')
    })

    it('Busca producto y encuentra', () => {
        cy.get('#twotabsearchtextbox').type('laptop{enter}')
        cy.url().should('include', 'k=laptop')
        cy.get('.s-main-slot .s-result-item').should('have.length.greaterThan', 0)
    })

    it('Busca producto, entra al detail y hay info', () => {
        cy.get('#twotabsearchtextbox').type('laptop{enter}')
        cy.get('.a-link-normal.s-no-outline').first().click()
        cy.url().should('include', '/dp/')
    })

    it('Cambia de idioma', () => {
        cy.get('#icp-nav-flyout').click()
        cy.get('.a-label.a-radio-label').contains('Deutsch').click()
        cy.get('#icp-language-translation-heading')
    })

    it('Navega a la sección de ofertas', () => {
        cy.get('.nav-progressive-content').contains('Deals').click()
        cy.url().should('include', 'goldbox')
    })

    it('Navega a la sección de ofertas y filtra por 4 estrellas', () => {
        cy.get('.nav-progressive-content').contains('Deals').click()
        cy.get('.a-icon .a-icon-star .a-star-4').click()
        cy.url().should('include', 'goldbox')
    })

    it('Mirar si se puede acceder al carrito', () => {
        cy.get('#nav-cart').click()
        cy.url().should('include', 'cart')
    })

    it('Mirar si se puede acceder al servicio al cliente', () => {
        cy.get('#nav-xshop a').contains('Customer').click()
        cy.url().should('include', 'customer-service')
    })

    it('Es account visible?', () => {
        cy.get('#nav-link-accountList').should('be.visible')
    })

    it('Esta el amazon logo?', () => {
        cy.get('.navFooterLogoLine').should('be.visible')
    })
    
})
