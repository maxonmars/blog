describe('User visited articles page', () => {
	beforeEach(() => {
		cy.login().visit('articles');
	});

		it.skip('failed test', () => {
		cy.getByTestId('ArticleVirtualizedList').should('exist');
		cy.getByTestId('adfas').should('exist');
	});

	it('articles success loadable', () => {
		cy.getByTestId('ArticleVirtualizedList').should('exist');
		cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
	});
	
	it('FIXTURES articles success loadable', () => {
		cy.intercept('GET', '**/articles?*', {fixture: 'articles.json'})
		cy.getByTestId('ArticleVirtualizedList').should('exist');
		cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
	});

});
