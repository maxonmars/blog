import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';
import type {Profile, ProfileScheme} from '../types/profile';
import {fetchProfileData} from '../services/fetchProfileData/fetchProfileData';
import {updateProfileData} from 'entities/Profile/model/services/updateProfileData/updateProfileData';

const initialState: ProfileScheme = {
	isLoading: false,
	readonlyProfileData: undefined,
	error: undefined,
	isReadonly: true,
	editableProfileData: undefined,
};

const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {
		editableProfileForm(state) {
			state.isReadonly = false;
		},
		editProfile(state, action: PayloadAction<Profile>) {
			state.editableProfileData = {
				...state.editableProfileData,
				...action.payload,
			};
		},
		cancelEditProfile(state) {
			state.editableProfileData = state.readonlyProfileData;
			state.isReadonly = true;
		},
	},
	extraReducers(builder) {
		builder
			.addCase(fetchProfileData.pending, state => {
				state.error = undefined;
				state.isLoading = true;
			})
			.addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
				state.isLoading = false;
				state.readonlyProfileData = action.payload;
				state.editableProfileData = action.payload;
			})
			.addCase(fetchProfileData.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})
			.addCase(updateProfileData.pending, state => {
				state.error = undefined;
				state.isLoading = true;
			})
			.addCase(updateProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
				state.isLoading = false;
				state.readonlyProfileData = action.payload;
				state.editableProfileData = action.payload;
				state.isReadonly = true;
			})
			.addCase(updateProfileData.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

export const {
	actions: profileActions,
	reducer: profileReducer,
} = profileSlice;
