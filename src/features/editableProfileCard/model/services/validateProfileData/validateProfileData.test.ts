import {validateProfileData} from './validateProfileData';
import AvatarImg from '@/shared/assets/tests/image/avatar-stories.jpeg';
import {Country} from '@/entities/Country/model/consts/country';
import {Currency} from '@/entities/Currency/model/consts/currency';
import {ValidateProfileError} from '../../consts/validateProfileError';

describe('validateProfileData', () => {
	const profileData = {
		firstName: 'Max',
		lastName: 'Mars',
		age: 22,
		username: 'Admin13',
		city: 'Irkutsk',
		avatar: AvatarImg as string,
		currency: Currency.RUB,
		country: Country.Russia,
	};
	test('should be empty errors', async () => {
		const errors = validateProfileData(profileData);

		expect(errors).toEqual([]);
	});
	test('should be errors includes ValidateProfileError.INCORRECT_USER_DATA', async () => {
		const errors = validateProfileData({...profileData, firstName: '', lastName: ''});

		expect(errors).toEqual([
			ValidateProfileError.INCORRECT_USER_DATA,
		]);
	});
	test('should be errors includes ValidateProfileError.INCORRECT_AGE', async () => {
		const errors = validateProfileData({...profileData, age: undefined});

		expect(errors).toEqual([
			ValidateProfileError.INCORRECT_AGE,
		]);
	});
	test('should be errors includes ValidateProfileError.INCORRECT_COUNTRY', async () => {
		const errors = validateProfileData({...profileData, country: undefined});

		expect(errors).toEqual([
			ValidateProfileError.INCORRECT_COUNTRY,
		]);
	});
	test('should be errors as ValidateProfileError []', async () => {
		const errors = validateProfileData({});

		expect(errors).toEqual([
			ValidateProfileError.INCORRECT_USER_DATA,
			ValidateProfileError.INCORRECT_AGE,
			ValidateProfileError.INCORRECT_COUNTRY,
		]);
	});
});
