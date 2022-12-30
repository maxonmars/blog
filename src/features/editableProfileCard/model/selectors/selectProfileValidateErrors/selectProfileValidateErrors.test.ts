import type {StateScheme} from 'app/providers/StoreProvider';
import {selectProfileValidateErrors} from './selectProfileValidateErrors';
import {ValidateProfileError} from '../../types/editableProfileCardSchema';

describe('selectProfileValidateErrors', () => {
	test('should be true is read only', () => {
		const state: DeepPartial<StateScheme> = {
			profile: {
				validateErrors: [ValidateProfileError.SERVER_ERROR, ValidateProfileError.INCORRECT_USER_DATA],
			},
		};
		expect(selectProfileValidateErrors(state as StateScheme))
			.toEqual([ValidateProfileError.SERVER_ERROR, ValidateProfileError.INCORRECT_USER_DATA]);
	});
	test('should be undefined if empty selectProfileValidateErrors', () => {
		const state: DeepPartial<StateScheme> = {};
		expect(selectProfileValidateErrors(state as StateScheme)).toBe(undefined);
	});
});
