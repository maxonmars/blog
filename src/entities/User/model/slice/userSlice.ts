import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';
import type {User, UserScheme} from '../types/User';
import {USER_LOCAL_STORAGE_KEY} from '@/shared/const/localStorage';

const initialState: UserScheme = {
	isInit: false,
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setAuthData(state, action: PayloadAction<User>) {
			state.authData = action.payload;
		},
		initAuthData: {
			reducer(state, action: PayloadAction<User | undefined>) {
				state.isInit = true;
				state.authData = action.payload;
			},
			prepare() {
				const user = localStorage.getItem(USER_LOCAL_STORAGE_KEY);
				if (user) {
					return {payload: JSON.parse(user) as User};
				}

				return {payload: undefined};
			},
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
