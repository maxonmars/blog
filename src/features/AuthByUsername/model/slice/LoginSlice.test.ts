import type {LoginScheme} from '../types/LoginScheme';
import {loginActions, loginReducer} from './LoginSlice';
import {loginByUsername} from '../services/loginByUsername';

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
	test('should be changed isLoading if asyncThunk rejected', () => {
		const state: DeepPartial<LoginScheme> = {
			isLoading: true,
		};
		expect(loginReducer(state as LoginScheme, loginByUsername.rejected))
			.toEqual({isLoading: false});
	});
});
