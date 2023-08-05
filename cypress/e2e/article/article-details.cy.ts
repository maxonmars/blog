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

	it('and view ArticleDetails', () => {
		cy.getByTestId('ArticleDetails.Info').should('exist');
	});

	it('and view ArticleRecommendationsList', () => {
		cy.getByTestId('ArticleRecommendationsList').should('exist');
	});

	it('add comment', () => {
		cy.getByTestId('ArticleDetails.Info');
		cy.getByTestId('AddCommentForm').scrollIntoView();
		cy.addComment('text');
		cy.getByTestId('CommentCard.Content').should('have.length', 1);
	});

	it('set article rating', () => {
		cy.getByTestId('ArticleDetails.Info');
		cy.getByTestId('RatingCard').scrollIntoView();
		cy.setRate(3, 'test feedback');
		cy.get('[data-selected=true]').should('have.length', 3);
	});
});
