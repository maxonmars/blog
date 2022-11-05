import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import type {User} from 'entities/User';
import {userActions} from 'entities/User';
import {USER_LOCAL_STORAGE_KEY} from 'shared/const/localStorage';

interface LoginByUsernameProps {
	username: string;
	password: string;
}

const checkData = (data: User) => {
	if (!data) {
		throw new Error();
	}
};

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, {rejectValue: string}>(
	'login/loginByUsername',
	async (authData, thunkAPI) => {
		try {
			const response = await axios.post<User>('http://localhost:8000/login', authData);
			checkData(response.data);

			localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data));
			thunkAPI.dispatch(userActions.setAuthData(response.data));
			return response.data;
		} catch (e: unknown) {
			return thunkAPI.rejectWithValue('error');
		}
	},
);
