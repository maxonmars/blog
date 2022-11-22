import type {DeepPartial} from '@reduxjs/toolkit';
import type {StateScheme} from 'app/providers/StoreProvider';
import {selectLoginUsername} from './selectLoginUsername';

describe('selectLoginUsername', () => {
	test('should be username string', () => {
		const state: DeepPartial<StateScheme> = {
			login: {
				username: 'Adam',
			},
		};
		expect(selectLoginUsername(state as StateScheme)).toEqual('Adam');
	});
	test('should be empty string if empty state', () => {
		const state: DeepPartial<StateScheme> = {};
		expect(selectLoginUsername(state as StateScheme)).toEqual('');
	});
});
