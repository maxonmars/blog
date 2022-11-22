import type {DeepPartial} from '@reduxjs/toolkit';
import type {StateScheme} from 'app/providers/StoreProvider';
import {selectLoginPassword} from './selectLoginPassword';

describe('selectLoginPassword', () => {
	test('should be password string', () => {
		const state: DeepPartial<StateScheme> = {
			login: {
				password: '123',
			},
		};
		expect(selectLoginPassword(state as StateScheme)).toEqual('123');
	});
	test('should be empty string if empty state', () => {
		const state: DeepPartial<StateScheme> = {};
		expect(selectLoginPassword(state as StateScheme)).toEqual('');
	});
});
