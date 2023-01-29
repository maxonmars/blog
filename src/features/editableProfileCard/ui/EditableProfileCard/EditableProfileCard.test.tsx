import {Country} from '@/entities/Country';
import {Currency} from '@/entities/Currency';
import type {Profile} from '@/entities/Profile';
import {$api} from '@/shared/api/api';
import type {ComponentRenderOptions} from '@/shared/lib/tests/componentRender/componentRender';
import {componentRender} from '@/shared/lib/tests/componentRender/componentRender';
import {screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {editableProfileCardReducer} from '../../model/slices/editableProfileCardSlice';
import {EditableProfileCard} from './EditableProfileCard';

const profile: Profile = {
	age: 22,
	avatar: '',
	city: '13',
	currency: Currency.EUR,
	country: Country.Armenia,
	id: '1',
	username: 'admin',
	firstName: 'admin',
	lastName: 'admin',
};

const options: ComponentRenderOptions = {
	initialState: {
		profile: {
			editableProfileData: profile,
			readonlyProfileData: profile,
			isReadonly: true,
		},
		user: {
			authData: {
				id: '1',
				username: 'admin',
			},
		},
	},
	asyncReducers: {
		profile: editableProfileCardReducer,
	},
};

describe('features/EditableProfileCard', () => {
	test('should by editable profile form', async () => {
		const user = userEvent.setup();
		componentRender(<EditableProfileCard idProfile="1"/>, options);
		await user.click(screen.getByTestId('EditableProfileCard.editButton'));
		expect(screen.getByTestId('EditableProfileCard.cancelButton')).toBeInTheDocument();
	});

	test('should by canceled form', async () => {
		const user = userEvent.setup();
		componentRender(<EditableProfileCard idProfile="1"/>, options);
		await user.click(screen.getByTestId('EditableProfileCard.editButton'));

		await user.clear(screen.getByTestId('ProfileCard.firstName'));
		await user.clear(screen.getByTestId('ProfileCard.lastName'));

		await user.type(screen.getByTestId('ProfileCard.firstName'), 'testFirst');
		await user.type(screen.getByTestId('ProfileCard.lastName'), 'testLast');

		expect(screen.getByTestId('ProfileCard.firstName')).toHaveValue('testFirst');
		expect(screen.getByTestId('ProfileCard.lastName')).toHaveValue('testLast');

		await user.click(screen.getByTestId('EditableProfileCard.cancelButton'));

		expect(screen.getByTestId('ProfileCard.firstName')).toHaveValue('admin');
		expect(screen.getByTestId('ProfileCard.lastName')).toHaveValue('admin');
	});

	test('should by no empty field error', async () => {
		const user = userEvent.setup();
		componentRender(<EditableProfileCard idProfile="1"/>, options);
		await user.click(screen.getByTestId('EditableProfileCard.editButton'));

		await user.clear(screen.getByTestId('ProfileCard.firstName'));

		await user.click(screen.getByTestId('EditableProfileCard.saveButton'));

		expect(screen.getByTestId('EditableProfileCard.error')).toBeInTheDocument();
	});

	test('should by put request', async () => {
		const user = userEvent.setup();
		const mockPutReq = jest.spyOn($api, 'put');

		componentRender(<EditableProfileCard idProfile="1"/>, options);
		await user.click(screen.getByTestId('EditableProfileCard.editButton'));

		await user.type(screen.getByTestId('ProfileCard.firstName'), 'testFirst');

		await user.click(screen.getByTestId('EditableProfileCard.saveButton'));

		expect(mockPutReq).toHaveBeenCalled();
	});
});
