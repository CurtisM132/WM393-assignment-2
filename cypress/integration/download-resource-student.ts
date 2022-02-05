import * as path from 'path';

before(() => {
    cy.visit('/');
    // Login as a student
    cy.get('#username').click().type('student1');
    cy.get('#password').click().type('password');
    cy.get('#kc-login').click();
});

// Runs through the process of downloading an existing resource
describe('Download Resource', () => {
    it('Should navigate to a populated resource board', () => {
        cy.get('.module-cards-container > :nth-child(1)').click();
        cy.get('.function-cards-container > :nth-child(6)').click();
        cy.get('.mat-selection-list > :nth-child(1)').click();

        cy.wait(1000);
    })

    it('Should have a text resource', () => {
        // File drag and drop zone shouldn't exist as a student
        cy.get('.dropzone').should('not.exist');
        // Material table adds padding to text hence the spaces either side of the test text
        cy.get(':nth-child(3) > .cdk-column-name').should('have.text', ' Markdown Example ');
        cy.get(':nth-child(3) > .cdk-column-type').should('have.text', ' TEXT ');
        cy.get(':nth-child(3) > .cdk-column-fileFormat').should('have.text', ' MD ');
    })

    it('Verifies that the text resource is downloaded when clicked', () => {
        // Download it
        cy.get(':nth-child(3) > .cdk-column-name').click();
        cy.wait(2000)
        // Verify it has been downloaded
        const downloadsFolder = Cypress.config("downloadsFolder");
        cy.readFile(path.join(downloadsFolder, "Markdown Example.md")).should("exist");
    })
})
