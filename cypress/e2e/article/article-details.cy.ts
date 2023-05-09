describe('template spec', () => {
	beforeEach(() => {
		cy.login();
	});
	it('passes', () => {
		cy.visit('https://example.cypress.io');
	});
});
