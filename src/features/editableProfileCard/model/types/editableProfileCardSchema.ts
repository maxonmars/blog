import type {Profile} from 'entities/Profile';

export enum ValidateProfileError {
	INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
	INCORRECT_PROFILE_ID = 'INCORRECT_PROFILE_ID',
	INCORRECT_AGE = 'INCORRECT_AGE',
	INCORRECT_COUNTRY = 'INCORRECT_COUNTRY',
	NO_DATA = 'NO_DATA',
	SERVER_ERROR = 'SERVER_ERROR',
}

export interface EditableProfileCardSchema {
	readonlyProfileData?: Profile;
	isLoading: boolean;
	error?: string;
	isReadonly: boolean;
	editableProfileData?: Profile;
	validateErrors?: ValidateProfileError[];
}
