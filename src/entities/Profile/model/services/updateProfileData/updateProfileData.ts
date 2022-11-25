import {createAsyncThunk} from '@reduxjs/toolkit';
import type {ThunkConfig} from 'app/providers/StoreProvider';
import type {Profile} from '../../types/profile';
import {selectEditableProfileData} from 'entities/Profile/model/selectors';

const checkData = (data: Profile) => {
	if (!data) {
		throw new Error();
	}
};

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
	'profile/updateProfileData',
	async (_, thunkAPI) => {
		try {
			const profileData = selectEditableProfileData(thunkAPI.getState());
			const response = await thunkAPI.extra.api.post<Profile>('/profile', profileData);
			checkData(response.data);

			return response.data;
		} catch (e: unknown) {
			return thunkAPI.rejectWithValue('error');
		}
	},
);
