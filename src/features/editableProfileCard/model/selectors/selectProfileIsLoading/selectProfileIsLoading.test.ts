import type {StateScheme} from 'app/providers/StoreProvider';
import {selectProfileIsLoading} from './selectProfileIsLoading';

describe('selectProfileIsLoading', () => {
	test('should be true for isLoading', () => {
		const state: DeepPartial<StateScheme> = {
			profile: {
				isLoading: true,
			},
		};
		expect(selectProfileIsLoading(state as StateScheme)).toBe(true);
	});
	test('should be undefined if empty selectProfileIsLoading', () => {
		const state: DeepPartial<StateScheme> = {};
		expect(selectProfileIsLoading(state as StateScheme)).toBe(undefined);
	});
});
