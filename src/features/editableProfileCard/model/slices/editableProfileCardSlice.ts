import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';
import {fetchProfileData} from '../services/fetchProfileData/fetchProfileData';
import {updateProfileData} from '../services/updateProfileData/updateProfileData';
import type {EditableProfileCardSchema} from '../types/editableProfileCardSchema';
import type {Profile} from 'entities/Profile';
import {Country} from 'entities/Country/model/consts/country';
import {Currency} from 'entities/Currency/model/consts/currency';

const initialState: EditableProfileCardSchema = {
	isLoading: false,
	readonlyProfileData: {
		age: 0,
		firstName: '',
		lastName: '',
		country: Country.Russia,
		currency: Currency.RUB,
		avatar: '',
		city: '',
		username: '',
	},
	error: undefined,
	isReadonly: true,
	editableProfileData: undefined,
	validateErrors: undefined,
};

const editableProfileCardSlice = createSlice({
	name: 'editableProfileCard',
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
			state.validateErrors = undefined;
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
				state.validateErrors = undefined;
				state.isLoading = true;
			})
			.addCase(updateProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
				state.isLoading = false;
				state.readonlyProfileData = action.payload;
				state.editableProfileData = action.payload;
				state.isReadonly = true;
				state.validateErrors = undefined;
			})
			.addCase(updateProfileData.rejected, (state, action) => {
				state.isLoading = false;
				state.validateErrors = action.payload;
			});
	},
});

export const {
	actions: editableProfileCardActions,
	reducer: editableProfileCardReducer,
} = editableProfileCardSlice;

