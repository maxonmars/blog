import type {StateScheme} from 'app/providers/StoreProvider';
import {selectEditableProfileData} from './selectEditableProfileData';
import AvatarImg from 'shared/assets/tests/image/avatar-stories.jpeg';
import {Country} from 'entities/Country/model/consts/country';
import {Currency} from 'entities/Currency/model/consts/currency';

describe('selectEditableProfileData', () => {
	test('should be full editableProfileData', () => {
		const editableProfileData = {
			firstName: 'Max',
			lastName: 'Mars',
			age: 22,
			username: 'Admin13',
			city: 'Irkutsk',
			avatar: AvatarImg as string,
			currency: Currency.RUB,
			country: Country.Russia,
		};

		const state: DeepPartial<StateScheme> = {
			profile: {
				editableProfileData,
			},
		};
		expect(selectEditableProfileData(state as StateScheme)).toEqual(editableProfileData);
	});
	test('should be undefined if empty editableProfileData', () => {
		const state: DeepPartial<StateScheme> = {};
		expect(selectEditableProfileData(state as StateScheme)).toBe(undefined);
	});
});
