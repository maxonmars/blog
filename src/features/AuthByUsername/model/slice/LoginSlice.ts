import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';
import type {LoginScheme} from '../types/LoginScheme';
import {loginByUsername} from '../services/loginByUsername';

const initialState: LoginScheme = {
	isLoading: false,
	username: '',
	password: '',
};

export const userLogin = createSlice({
	name: 'login',
	initialState,
	reducers: {
		setUsername(state, action: PayloadAction<string>) {
			state.username = action.payload;
		},
		setPassword(state, action: PayloadAction<string>) {
			state.password = action.payload;
		},
	},
	extraReducers(builder) {
		builder
			.addCase(loginByUsername.pending, (state, action) => {
				state.error = undefined;
				state.isLoading = true;
			})
			.addCase(loginByUsername.fulfilled, (state, action) => {
				state.isLoading = false;
			})
			.addCase(loginByUsername.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

export const {
	actions: loginActions,
	reducer: loginReducer,
} = userLogin;
