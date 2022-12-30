import type {StateScheme} from 'app/providers/StoreProvider';
import {selectProfileError} from './selectProfileError';

describe('selectProfileError', () => {
	test('should be text error', () => {
		const state: DeepPartial<StateScheme> = {
			profile: {
				error: 'error',
			},
		};
		expect(selectProfileError(state as StateScheme)).toBe('error');
	});
	test('should be undefined if empty selectProfileError', () => {
		const state: DeepPartial<StateScheme> = {};
		expect(selectProfileError(state as StateScheme)).toBe(undefined);
	});
});
