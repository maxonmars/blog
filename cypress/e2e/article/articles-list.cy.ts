describe('User visited articles page', () => {
	beforeEach(() => {
		cy.login().visit('articles');
	});
	it('articles success loadable', () => {
		cy.getByTestId('ArticleVirtualizedList').should('exist');
		cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
	});
});
