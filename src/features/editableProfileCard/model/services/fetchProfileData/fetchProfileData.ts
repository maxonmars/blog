import {createAsyncThunk} from '@reduxjs/toolkit';
import type {ThunkConfig} from 'app/providers/StoreProvider';
import type {Profile} from '../../../../../entities/Profile/model/types/profile';

const checkData = (data: Profile) => {
	if (!data) {
		throw new Error();
	}
};

export const fetchProfileData = createAsyncThunk<Profile, string | undefined, ThunkConfig<string>>(
	'profile/fetchProfileData',
	async (profileId, thunkAPI) => {
		if (!profileId) {
			return thunkAPI.rejectWithValue('error');
		}

		try {
			const response = await thunkAPI.extra.api.get<Profile>(`/profiles/${profileId}`);
			checkData(response.data);

			return response.data;
		} catch (e: unknown) {
			return thunkAPI.rejectWithValue('error');
		}
	},
);
