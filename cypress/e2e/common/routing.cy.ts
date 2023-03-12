describe('Routing', () => {
	it('go to Main page', () => {
		cy.visit('/');
		cy.get('[data-testid=MainPage]').should('exist');
	});
});
