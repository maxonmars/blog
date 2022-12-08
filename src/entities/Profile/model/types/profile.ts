import type {Currency} from 'entities/Currency/model/types/currency';
import type {Country} from 'entities/Country/model/types/country';

export enum ValidateProfileError {
	INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
	INCORRECT_PROFILE_ID = 'INCORRECT_PROFILE_ID',
	INCORRECT_AGE = 'INCORRECT_AGE',
	INCORRECT_COUNTRY = 'INCORRECT_COUNTRY',
	NO_DATA = 'NO_DATA',
	SERVER_ERROR = 'SERVER_ERROR',
}

export interface Profile {
	id?: string;
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
	validateErrors?: ValidateProfileError[];
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
