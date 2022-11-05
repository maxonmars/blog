import type {DeepPartial} from '@reduxjs/toolkit';
import type {LoginScheme} from 'features/AuthByUsername';
import {loginActions, loginReducer} from 'features/AuthByUsername/model/slice/LoginSlice';
import {loginByUsername} from 'features/AuthByUsername/model/services/loginByUsername';

describe('LoginSlice', () => {
	test('should be changed username', () => {
		const state: DeepPartial<LoginScheme> = {
			username: 'Adam',
		};
		expect(loginReducer(state as LoginScheme, loginActions.setUsername('Hype')))
			.toEqual({username: 'Hype'});
	});
	test('should be changed password', () => {
		const state: DeepPartial<LoginScheme> = {
			password: '123',
		};
		expect(loginReducer(state as LoginScheme, loginActions.setPassword('123')))
			.toEqual({password: '123'});
	});
	test('should be changed isLoading if asyncThunk pending', () => {
		const state: DeepPartial<LoginScheme> = {
			isLoading: false,
		};
		expect(loginReducer(state as LoginScheme, loginByUsername.pending))
			.toEqual({isLoading: true});
	});
	test('should be changed isLoading if asyncThunk fulfilled', () => {
		const state: DeepPartial<LoginScheme> = {
			isLoading: true,
		};
		expect(loginReducer(state as LoginScheme, loginByUsername.fulfilled))
			.toEqual({isLoading: false});
	});
});
