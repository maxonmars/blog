import {Country} from '@/entities/Country';
import {Currency} from '@/entities/Currency';
import AvatarImg from '@/shared/assets/tests/image/avatar-stories.jpeg';
import {fetchProfileData} from '../../../../features/editableProfileCard/model/services/fetchProfileData/fetchProfileData';
import type {EditableProfileCardSchema} from '../types/editableProfileCardSchema';
import {editableProfileCardActions, editableProfileCardReducer} from './editableProfileCardSlice';

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
		const state: DeepPartial<EditableProfileCardSchema> = {
			isReadonly: true,
		};
		expect(editableProfileCardReducer(state as EditableProfileCardSchema, editableProfileCardActions.editableProfileForm()))
			.toEqual({isReadonly: false});
	});
	test('should be changed username', () => {
		const state: DeepPartial<EditableProfileCardSchema> = {
			editableProfileData: {
				username: 'Max',
			},
		};
		expect(editableProfileCardReducer(state as EditableProfileCardSchema, editableProfileCardActions.editProfile({username: 'Aman'})))
			.toEqual({
				editableProfileData: {
					username: 'Aman',
				},
			});
	});
	test('should be changed isReadonly as true', () => {
		const state: DeepPartial<EditableProfileCardSchema> = {
			isReadonly: false,
		};
		expect(editableProfileCardReducer(state as EditableProfileCardSchema, editableProfileCardActions.cancelEditProfile))
			.toEqual({isReadonly: true});
	});
	test('should be changed isLoading if fetchProfileData pending', () => {
		const state: DeepPartial<EditableProfileCardSchema> = {
			isLoading: false,
		};
		expect(editableProfileCardReducer(state as EditableProfileCardSchema, fetchProfileData.pending))
			.toEqual({isLoading: true});
	});
	test('should be changed isLoading if fetchProfileData fulfilled', () => {
		const state: DeepPartial<EditableProfileCardSchema> = {
			isLoading: true,
		};
		expect(editableProfileCardReducer(state as EditableProfileCardSchema, fetchProfileData.fulfilled(profileData, '', '1')))
			.toEqual({
				isLoading: false,
				editableProfileData: profileData,
				readonlyProfileData: profileData,
			});
	});
});
