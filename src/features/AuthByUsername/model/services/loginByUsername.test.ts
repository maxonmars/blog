import axios from 'axios';
import {loginByUsername} from './loginByUsername';
import {userActions} from 'entities/User';
import {TestAsyncThunk} from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

jest.mock('axios');

const mockedAxios = jest.mocked(axios);

describe('loginByUsername', () => {
	test('should be fulfilled/userData', async () => {
		const userData = {username: 'Adam', id: '1'};
		mockedAxios.post.mockReturnValue(Promise.resolve({data: userData}));
		const thunk = new TestAsyncThunk(loginByUsername);
		const result = await thunk.callThunk({username: 'Adam', password: '123'});

		expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData));
		expect(thunk.dispatch).toHaveBeenCalledTimes(3);
		expect(mockedAxios.post).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe('fulfilled');
		expect(result.payload).toEqual(userData);
	});
	test('should be rejected/error if post status 403', async () => {
		mockedAxios.post.mockReturnValue(Promise.resolve({status: 403}));
		const thunk = new TestAsyncThunk(loginByUsername);
		const result = await thunk.callThunk({username: 'Adam', password: '123'});

		expect(thunk.dispatch).toHaveBeenCalledTimes(2);
		expect(mockedAxios.post).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe('rejected');
		expect(result.payload).toBe('error');
	});
});
