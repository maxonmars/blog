import type {StateScheme} from 'app/providers/StoreProvider';
import {selectLoginError} from './selectLoginError';

describe('selectLoginError', () => {
	test('should be string error', () => {
		const state: DeepPartial<StateScheme> = {
			login: {
				error: 'error',
			},
		};
		expect(selectLoginError(state as StateScheme)).toBe('error');
	});
	test('should be undefined if empty state', () => {
		const state: DeepPartial<StateScheme> = {};
		expect(selectLoginError(state as StateScheme)).toBe(undefined);
	});
});
