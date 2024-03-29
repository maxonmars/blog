import {Country} from '@/entities/Country';
import {isSomeEnum} from '@/shared/lib/isSomeEnum/isSomeEnum';
import type {Profile} from '../../../../../entities/Profile/model/types/profile';
import {ValidateProfileError} from '../../consts/validateProfileError';

export const validateProfileData = (profile?: Profile) => {
	const errors: ValidateProfileError[] = [];

	if (!profile) {
		errors.push(ValidateProfileError.NO_DATA);
		return errors;
	}

	const {lastName, firstName, age, country} = profile;

	if (!lastName || !firstName) {
		errors.push(ValidateProfileError.INCORRECT_USER_DATA);
	}

	if (!Number.isInteger(Number(age))) {
		errors.push(ValidateProfileError.INCORRECT_AGE);
	}

	const isCountry = isSomeEnum(Country);
	if (!isCountry(country)) {
		errors.push(ValidateProfileError.INCORRECT_COUNTRY);
	}

	return errors;
};
