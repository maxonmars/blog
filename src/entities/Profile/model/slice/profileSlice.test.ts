import type {ProfileScheme} from '../types/profile';
import {profileActions, profileReducer} from './profileSlice';
import {fetchProfileData} from '../services/fetchProfileData/fetchProfileData';
import AvatarImg from 'shared/assets/tests/image/avatar-stories.jpeg';
import {Currency} from 'entities/Currency/model/types/currency';
import {Country} from 'entities/Country/model/types/country';

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

describe('profileSlice', () => {
	test('should be changed isReadonly as false', () => {
		const state: DeepPartial<ProfileScheme> = {
			isReadonly: true,
		};
		expect(profileReducer(state as ProfileScheme, profileActions.editableProfileForm()))
			.toEqual({isReadonly: false});
	});
	test('should be changed username', () => {
		const state: DeepPartial<ProfileScheme> = {
			editableProfileData: {
				username: 'Max',
			},
		};
		expect(profileReducer(state as ProfileScheme, profileActions.editProfile({username: 'Aman'})))
			.toEqual({
				editableProfileData: {
					username: 'Aman',
				},
			});
	});
	test('should be changed isReadonly as true', () => {
		const state: DeepPartial<ProfileScheme> = {
			isReadonly: false,
		};
		expect(profileReducer(state as ProfileScheme, profileActions.cancelEditProfile))
			.toEqual({isReadonly: true});
	});
	test('should be changed isLoading if fetchProfileData pending', () => {
		const state: DeepPartial<ProfileScheme> = {
			isLoading: false,
		};
		expect(profileReducer(state as ProfileScheme, fetchProfileData.pending))
			.toEqual({isLoading: true});
	});
	test('should be changed isLoading if fetchProfileData fulfilled', () => {
		const state: DeepPartial<ProfileScheme> = {
			isLoading: true,
		};
		expect(profileReducer(state as ProfileScheme, fetchProfileData.fulfilled(profileData, '')))
			.toEqual({
				isLoading: false,
				editableProfileData: profileData,
				readonlyProfileData: profileData,
			});
	});
});
