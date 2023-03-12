import {selectByTestId} from '../../helpers/selectByTestId';

describe('Routing', () => {
	describe('No auth user', () => {
		it('go to MainPage', () => {
			cy.visit('/');
			cy.get(selectByTestId('MainPage')).should('exist');
		});
		it('go to redirect MainPage', () => {
			cy.visit('/profile/1');
			cy.get(selectByTestId('MainPage')).should('exist');
		});
		it('go to redirect NotFoundPage', () => {
			cy.visit('/fasd');
			cy.get(selectByTestId('NotFoundPage')).should('exist');
		});
	});
	describe('Auth user', () => {
		beforeEach(() => {
			cy.login();
		});
		it('go to ProfilePage', () => {
			cy.visit('/profile/1');
			cy.get(selectByTestId('ProfilePage')).should('exist');
		});
		it('go to ArticlesPage', () => {
			cy.visit('/articles');
			cy.get(selectByTestId('ArticlesPage')).should('exist');
		});
	});
});
