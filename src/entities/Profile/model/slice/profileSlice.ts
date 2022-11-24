import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';
import type {Profile, ProfileScheme} from '../types/profile';
import {fetchProfileData} from '../services/fetchProfileData/fetchProfileData';

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
	extraReducers(builder) {
		builder
			.addCase(fetchProfileData.pending, state => {
				state.error = undefined;
				state.isLoading = true;
			})
			.addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
				state.isLoading = false;
				state.data = action.payload;
			})
			.addCase(fetchProfileData.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

export const {
	actions: profileActions,
	reducer: profileReducer,
} = profileSlice;
