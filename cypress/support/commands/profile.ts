export const updateProfile = (firstName: string, lastName: string) => {
	cy.getByTestId('EditableProfileCard.editButton').click();
	cy.getByTestId('ProfileCard.firstName').clear().type(firstName);
	cy.getByTestId('ProfileCard.lastName').clear().type(lastName);
	cy.getByTestId('EditableProfileCard.saveButton').click();
};

export const resetProfile = (profileId: string) => {
	return cy
		.request({
			method: 'PUT',
			url: `http://localhost:8000/profiles/${profileId}`,
			headers: {Authorization: 'dasd'},
			body: {
				id: '4',
				firstName: 'test',
				lastName: 'user',
				age: 99,
				currency: 'EUR',
				country: 'Ukraine',
				city: 'Kharkov',
				username: 'testuser',
				avatar: 'https://xakep.ru/wp-content/uploads/2018/05/171485/KuroiSH-hacker.jpg',
			},
		});
};

declare global {
	namespace Cypress {
		interface Chainable {
			updateProfile(firstName: string, lastName: string): Chainable<void>;
			resetProfile(profileId: string): Chainable<void>;
		}
	}
}
