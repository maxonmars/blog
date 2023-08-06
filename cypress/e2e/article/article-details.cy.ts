let currentArticleId = '';

describe('User visit ArticlePage', () => {
	beforeEach(() => {
		cy.login();
		cy.createArticle().then(article => {
			currentArticleId = article.id;
			cy.visit(`articles/${article.id}`);
		});
	});

	afterEach(() => {
		cy.removeArticle(currentArticleId);
	});

	it.skip('and view ArticleDetails', () => {
		cy.getByTestId('ArticleDetails.Info').should('exist');
	});

	it.skip('and view ArticleRecommendationsList', () => {
		cy.getByTestId('ArticleRecommendationsList').should('exist');
	});

	it.skip('add comment', () => {
		cy.getByTestId('ArticleDetails.Info');
		cy.getByTestId('AddCommentForm').scrollIntoView();
		cy.addComment('text');
		cy.getByTestId('CommentCard.Content').should('have.length', 1);
	});

	it('set article rating', () => {
		cy.intercept('GET', '**/articles/*', {fixture: 'article-details.json'})
		cy.getByTestId('ArticleDetails.Info');
		cy.getByTestId('RatingCard').scrollIntoView();
		cy.setRate(3, 'test feedback');
		cy.get('[data-selected=true]').should('have.length', 3);
	});
});
