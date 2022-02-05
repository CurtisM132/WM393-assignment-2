before(() => {
    cy.visit('/');
    // Login as a tutor
    cy.get('#username').click().type('tutor1');
    cy.get('#password').click().type('password');
    cy.get('#kc-login').click();
});

// Runs through the process of uploading an image to an empty resource board
describe('Upload Resource', () => {
    it('Should navigate to an empty resource board', () => {
        cy.get('.module-cards-container > :nth-child(1)').click();
        cy.get('.function-cards-container > :nth-child(6)').click();
        cy.get('.mat-selection-list > :nth-child(2)').click();

        cy.wait(1000);
    })

    it('Should upload an image file', () => {
        // Disable file drag and drop zone
        cy.get('.dropzone').trigger('mousemove', { which: 1, pageX: 600, pageY: 100 });

        // Cypress can't click the upload button and browse for a file so we need to
        // artificially upload a file directly to the file input
        cy.get('#file-upload').attachFile("test-image.jpg");
    })

    it('Verifies the correct resource table entry has been created', () => {
        // Disable file drag and drop zone
        cy.get('.dropzone').trigger('mousemove', { which: 1, pageX: 600, pageY: 100 });
        // Material table adds padding to text hence the spaces either side of the test text
        cy.get('.mat-row > .cdk-column-name').should('have.text', ' test-image ');
        cy.get('.mat-row > .cdk-column-type').should('have.text', ' IMAGE ');
        cy.get('.mat-row > .cdk-column-fileFormat').should('have.text', ' JPG ');
    })

    it('Should allow a resource comment to be set', () => {
        // Disable file drag and drop zone
        cy.get('.dropzone').trigger('mousemove', { which: 1, pageX: 600, pageY: 100 });
        cy.get('#resource-comment-input').type('Test comment');
    })

    it('Verifies that the image is displayed when the resource entry is clicked', () => {
        cy.get('.mat-row > .cdk-column-name').click();
        cy.get('#resource-image-display').should('be.visible')
        cy.get('.resource-name').should('have.text', 'test-image');
    })

    it('Should navigate back to resource board when the close button is clicked', () => {
        cy.get('#close-button').click();

        // Disable file drag and drop zone
        cy.get('.dropzone').trigger('mousemove', { which: 1, pageX: 600, pageY: 100 });
        // Check we are looking at the resource board and it's displaying correctly
        cy.get('.mat-row > .cdk-column-name').should('have.text', ' test-image ');
    })
})
