import type {StateScheme} from 'app/providers/StoreProvider';
import {selectLoginIsLoading} from './selectLoginIsLoading';

describe('selectLoginIsLoading', () => {
	test('should be true', () => {
		const state: DeepPartial<StateScheme> = {
			login: {
				isLoading: true,
			},
		};
		expect(selectLoginIsLoading(state as StateScheme)).toEqual(true);
	});
	test('should be false if empty state', () => {
		const state: DeepPartial<StateScheme> = {};
		expect(selectLoginIsLoading(state as StateScheme)).toEqual(false);
	});
});
