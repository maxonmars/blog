import {createSlice} from '@reduxjs/toolkit';
import type {ProfileScheme} from '../types/profile';

const initialState: ProfileScheme = {
	isLoading: false,
	data: undefined,
	error: undefined,
	readonly: true,
};

const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {},
});

export const {
	actions: profileActions,
	reducer: profileReducer,
} = profileSlice;
