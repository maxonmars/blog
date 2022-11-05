import type {DeepPartial} from '@reduxjs/toolkit';
import type {StateScheme} from 'app/providers/StoreProvider';
import {selectLoginError} from 'features/AuthByUsername/model/selectors/selectLoginError/selectLoginError';

describe('selectLoginError', () => {
	test('should be string error', () => {
		const state: DeepPartial<StateScheme> = {
			login: {
				error: 'error',
			},
		};
		expect(selectLoginError(state as StateScheme)).toEqual('error');
	});
	test('should be undefined if empty state', () => {
		const state: DeepPartial<StateScheme> = {};
		expect(selectLoginError(state as StateScheme)).toEqual(undefined);
	});
});
