import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';
import type {User, UserScheme} from '../types/User';
import {USER_LOCAL_STORAGE_KEY} from 'shared/const/localStorage';

const initialState: UserScheme = {
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setAuthData(state, action: PayloadAction<User>) {
			state.authData = action.payload;
		},
		initAuthData(state) {
			const user = localStorage.getItem(USER_LOCAL_STORAGE_KEY);
			if (user) {
				state.authData = JSON.parse(user) as User;
			}
		},
		logout(state) {
			state.authData = undefined;
			localStorage.removeItem(USER_LOCAL_STORAGE_KEY);
		},
	},
});

export const {
	actions: userActions,
	reducer: userReducer,
} = userSlice;
