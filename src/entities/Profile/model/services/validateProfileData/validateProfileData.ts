import type {Profile} from 'entities/Profile';
import {ValidateProfileError} from 'entities/Profile/model/types/profile';

export const validateProfileData = (profile?: Profile) => {
	const errors: ValidateProfileError[] = [];

	if (!profile) {
		errors.push(ValidateProfileError.NO_DATA);
		return errors;
	}

	const {lastName, firstName, age} = profile;

	if (!lastName || !firstName) {
		errors.push(ValidateProfileError.INCORRECT_USER_DATA);
	}

	if (!Number.isInteger(Number(age))) {
		errors.push(ValidateProfileError.INCORRECT_AGE);
	}

	return errors;
};
