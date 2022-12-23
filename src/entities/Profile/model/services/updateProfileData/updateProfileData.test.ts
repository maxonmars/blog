import {updateProfileData} from './updateProfileData';
import {TestAsyncThunk} from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import AvatarImg from 'shared/assets/tests/image/avatar-stories.jpeg';
import {Currency} from 'entities/Currency/model/types/currency';
import {Country} from 'entities/Country/model/types/country';
import {ValidateProfileError} from '../../types/profile';

describe('updateProfileData', () => {
	const profileData = {
		firstName: 'Max',
		lastName: 'Mars',
		age: 22,
		username: 'Admin13',
		city: 'Irkutsk',
		avatar: AvatarImg as string,
		currency: Currency.RUB,
		country: Country.Russia,
	};
	test('should be fulfilled/profileData', async () => {
		const thunk = new TestAsyncThunk(updateProfileData, {profile: {editableProfileData: profileData}});
		thunk.api.put.mockReturnValue(Promise.resolve({data: profileData}));
		const result = await thunk.callThunk();

		expect(thunk.dispatch).toHaveBeenCalledTimes(2);
		expect(thunk.getState).toHaveBeenCalledTimes(1);
		expect(thunk.api.put).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe('fulfilled');
		expect(result.payload).toEqual(profileData);
	});
	test('should be rejected/SERVER_ERROR if put status 403', async () => {
		const thunk = new TestAsyncThunk(updateProfileData, {profile: {editableProfileData: profileData}});
		thunk.api.put.mockReturnValue(Promise.resolve({status: 403}));
		const result = await thunk.callThunk();

		expect(thunk.dispatch).toHaveBeenCalledTimes(2);
		expect(thunk.api.put).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe('rejected');
		expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
	});
	test('should be rejected/NO_DATA if client error', async () => {
		const thunk = new TestAsyncThunk(updateProfileData, {profile: {editableProfileData: undefined}});
		const result = await thunk.callThunk();

		expect(result.meta.requestStatus).toBe('rejected');
		expect(result.payload).toEqual([ValidateProfileError.NO_DATA]);
	});
});
