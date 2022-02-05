before(() => {
    cy.visit('/');
    // Login as a student
    cy.get('#username').click().type('student1');
    cy.get('#password').click().type('password');
    cy.get('#kc-login').click();
});

// Runs through the process of viewing an image and a video resource
describe('View Resources', () => {
    it('Should navigate to a populated resource board', () => {
        cy.get('.module-cards-container > :nth-child(1)').click();
        cy.get('.function-cards-container > :nth-child(6)').click();
        cy.get('.mat-selection-list > :nth-child(1)').click();

        cy.wait(1000);
    })

    it('Should have an image resource', () => {
        // File drag and drop zone shouldn't exist as a student
        cy.get('.dropzone').should('not.exist');
        // Material table adds padding to text hence the spaces either side of the test text
        cy.get('tbody > :nth-child(1) > .cdk-column-name').should('have.text', ' 3D Cartography Example ');
        cy.get('tbody > :nth-child(1) > .cdk-column-type').should('have.text', ' IMAGE ');
        cy.get('tbody > :nth-child(1) > .cdk-column-fileFormat').should('have.text', ' JPG ');
    })

    it('Verifies that the image is displayed when the resource entry is clicked', () => {
        cy.get('tbody > :nth-child(1) > .cdk-column-name').click();
        cy.get('#resource-image-display').should('be.visible')
        cy.get('.resource-name').should('have.text', '3D Cartography Example');
    })

    it('Should navigate back to resource board when the close button is clicked', () => {
        cy.get('#close-button').click();

        // Check we are looking at the resource board and it's displaying correctly
        cy.get('tbody > :nth-child(1) > .cdk-column-name').should('have.text', ' 3D Cartography Example ');
    })

    it('Should have a video resource', () => {
        cy.get('.dropzone').should('not.exist');
        cy.get('tbody > :nth-child(2) > .cdk-column-name').should('have.text', ' How to Setup ArcGIS ');
        cy.get('tbody > :nth-child(2) > .cdk-column-type').should('have.text', ' VIDEO ');
        cy.get('tbody > :nth-child(2) > .cdk-column-fileFormat').should('have.text', ' MP4 ');
    })

    it('Verifies that the video is displayed when the resource entry is clicked', () => {
        cy.get('tbody > :nth-child(2) > .cdk-column-name').click();
        cy.get('#resource-video-display').should('be.visible');
    })

    it('Should navigate back to resource board when the close button is clicked', () => {
        cy.get('#close-button').click();

        // Check we are looking at the resource board and it's displaying correctly
        cy.get('tbody > :nth-child(2) > .cdk-column-name').should('have.text', ' How to Setup ArcGIS ');
    })
})
