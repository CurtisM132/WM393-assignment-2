// Runs through the process of uploading an image to an empty resource board
describe('Upload Resource', () => {
    it('Should navigate to an empty resource board', () => {
        cy.visit('/');
        cy.get('.module-cards-container > :nth-child(1)').click();
        cy.get('.function-cards-container > :nth-child(6)').click();
        cy.get('.mat-selection-list > :nth-child(2)').click();

        cy.wait(1000);
    })

    it('Should upload an image file', () => {
        // Disable drag and drop zone
        cy.get('.dropzone').trigger('mousemove', { which: 1, pageX: 600, pageY: 100 });

        // Cypress can't click the upload button and browse for a file so we need to
        // artificially upload a file directly to the file input
        cy.get('#file-upload').attachFile("test-image.jpg");
    })

    it('Should allow a resource comment to be set', () => {
        // Disable drag and drop zone
        cy.get('.dropzone').trigger('mousemove', { which: 1, pageX: 600, pageY: 100 });
        cy.get('#resource-comment-input').type('Test comment');
    })

    it('Verifies the correct resource table entry has been created', () => {
        // Disable drag and drop zone
        cy.get('.dropzone').trigger('mousemove', { which: 1, pageX: 600, pageY: 100 });
        cy.get('.mat-row > .cdk-column-name').should('have.text', ' test-image ');
        cy.get('.mat-row > .cdk-column-type').should('have.text', ' IMAGE ');
        cy.get('.mat-row > .cdk-column-fileFormat').should('have.text', ' JPG ');
    })

    it('Verifies that the image is displayed when the resource entry is clicked', () => {
        cy.get('.mat-row > .cdk-column-name').click();
        cy.get('#resource-image-display').should('be.visible')
        cy.get('.resource-name').should('have.text', 'test-image');
    })

    it('Should navigate back to resource board when the close button is clicked', () => {
        cy.get('#close-button').click();

        // Disable drag and drop zone
        cy.get('.dropzone').trigger('mousemove', { which: 1, pageX: 600, pageY: 100 });
        cy.get('.mat-row > .cdk-column-name').should('have.text', ' test-image ');
    })

    it('Should have the same resource comment', () => {
        // Disable drag and drop zone
        cy.get('.dropzone').trigger('mousemove', { which: 1, pageX: 600, pageY: 100 });
        cy.get('#resource-comment-input').should('have.value', 'Test comment');
    })
})
