import {createAsyncThunk} from '@reduxjs/toolkit';
import type {ThunkConfig} from 'app/providers/StoreProvider';
import type {Profile} from '../../types/profile';

const checkData = (data: Profile) => {
	if (!data) {
		throw new Error();
	}
};

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
	'profile/fetchProfileData',
	async (authData, thunkAPI) => {
		try {
			const response = await thunkAPI.extra.api.get<Profile>('/profile');
			checkData(response.data);

			return response.data;
		} catch (e: unknown) {
			return thunkAPI.rejectWithValue('error');
		}
	},
);
