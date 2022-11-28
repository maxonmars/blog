import {createAsyncThunk} from '@reduxjs/toolkit';
import type {ThunkConfig} from 'app/providers/StoreProvider';
import type {Profile} from '../../types/profile';
import {selectEditableProfileData} from '../../selectors';
import {validateProfileData} from '../validateProfileData/validateProfileData';
import {ValidateProfileError} from '../../types/profile';

const checkData = (data: Profile) => {
	if (!data) {
		throw new Error();
	}
};

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<ValidateProfileError[]>>(
	'profile/updateProfileData',
	async (_, thunkAPI) => {
		const profileData = selectEditableProfileData(thunkAPI.getState());
		const errors = validateProfileData(profileData);

		if (errors.length) {
			return thunkAPI.rejectWithValue(errors);
		}

		try {
			const response = await thunkAPI.extra.api.put<Profile>('/profile', profileData);
			checkData(response.data);

			return response.data;
		} catch (e: unknown) {
			return thunkAPI.rejectWithValue([ValidateProfileError.SERVER_ERROR]);
		}
	},
);
