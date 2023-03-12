describe('Routing', () => {
	describe('Auth user', () => {
		it('go to Main page', () => {
			cy.visit('/');
			cy.get('[data-testid=MainPage]').should('exist');
		});
		it('go to Main page', () => {
			cy.visit('/profile/1');
			cy.get('[data-testid=ProfilePage]').should('exist');
		});
		it('Not found page', () => {
			cy.visit('/fasd');
			cy.get('[data-testid=NotFoundPage]').should('exist');
		});
	});
	// describe('No auth user', () => {
	//
	// });
});
