let profileId = '';

describe('User visited profile page', () => {
	beforeEach(() => {
		cy.visit('');
		cy.login().then(data => {
			profileId = data.id;
			cy.visit(`profile/${data.id}`);
		});
	});

	afterEach(() => {
		cy.resetProfile(profileId);
	});

	it('page success loadable', () => {
		cy.getByTestId('ProfileCard.firstName')
			.should('have.value', 'test');
	});

	it('page editable', () => {
		const newFirstName = 'newFirstName';
		const newLastName = 'newLastName';
		cy.updateProfile(newFirstName, newLastName);
		cy.getByTestId('ProfileCard.firstName')
			.should('have.value', 'newFirstName');
		cy.getByTestId('ProfileCard.lastName')
			.should('have.value', 'newLastName');
	});
});

export { };

