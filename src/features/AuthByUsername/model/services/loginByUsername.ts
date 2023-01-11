import {createAsyncThunk} from '@reduxjs/toolkit';
import type {User} from '@/entities/User';
import {userActions} from '@/entities/User';
import {USER_LOCAL_STORAGE_KEY} from '@/shared/const/localStorage';
import type {ThunkConfig} from '@/app/providers/StoreProvider';

interface LoginByUsernameProps {
	username: string;
	password: string;
}

const checkData = (data: User) => {
	if (!data) {
		throw new Error();
	}
};

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string>>(
	'login/loginByUsername',
	async (authData, thunkAPI) => {
		try {
			const response = await thunkAPI.extra.api.post<User>('/login', authData);
			checkData(response.data);

			localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data));
			thunkAPI.dispatch(userActions.setAuthData(response.data));
			return response.data;
		} catch (e: unknown) {
			return thunkAPI.rejectWithValue('error');
		}
	},
);
