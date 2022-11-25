import type {Country, Currency} from 'shared/const/common';

export interface Profile {
	firstName?: string;
	lastName?: string;
	age?: number;
	currency?: Currency;
	country?: Country;
	city?: string;
	username?: string;
	avatar?: string;
}

export interface ProfileScheme {
	readonlyProfileData?: Profile;
	isLoading: boolean;
	error?: string;
	isReadonly: boolean;
	editableProfileData?: Profile;
}

export enum ProfileField {
	FIRST_NAME = 'firstName',
	LAST_NAME = 'lastName',
	AGE = 'age',
	CURRENCY = 'currency',
	COUNTRY = 'country',
	CITY = 'city',
	USERNAME = 'username',
	AVATAR = 'avatar',
}
