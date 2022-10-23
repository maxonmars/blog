import {createSlice} from '@reduxjs/toolkit';
import type {UserScheme} from '../types/User';

const initialState: UserScheme = {
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {

	},
});

export const {
	actions: userActions,
	reducer: userReducer,
} = userSlice;
