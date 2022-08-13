/// <reference types="Cypress" />

describe ('To Do List basic checks', () =>
{
    beforeEach (()=>
    {
        cy.viewport(1920,1080)
        cy.visit('https://cntatis.github.io/todolist/')
    })

    it ('Template is loaded properly, basic checks', ()=>
    {
        cy.url().should('include', 'https://cntatis.github.io/todolist/' )
        cy.contains('To Do List')
        cy.get('#inputField').should('exist').and('be.visible')
        cy.get('#toDoButton').should('exist').and('be.visible')
    })

    it ('Add functionality', ()=>
    {
        cy.get('#toDoButton').click()
        //cy.get('#validationErrorEmpty').should('exist') // Should add validation errors
        cy.get('#inputField').type('To do #1')
        cy.get('#inputField').clear()
        cy.get('#inputField').type('0')
        cy.get('#toDoButton').click()
        //cy.get('#validationErrorEmpty').should('not.exist').and('not.be.visible') // Should add validation errors
        cy.get('#inputField').type('@')
        cy.get('#toDoButton').click()
        //cy.get('#validationErrorEmpty').should('not.exist').and('not.be.visible') // Should add validation errors
        cy.get('#inputField').type('To do #3')
        cy.get('#toDoButton').click()
        //cy.get('#validationErrorEmpty').should('not.exist').and('not.be.visible') // Should add validation errors
    })

    it ('Strikethrough functionality', ()=>
    {

    })

    it ('Delete functionality', ()=>
    {

    })
})