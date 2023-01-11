import {fetchProfileData} from './fetchProfileData';
import {TestAsyncThunk} from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import AvatarImg from '@/shared/assets/tests/image/avatar-stories.jpeg';
import {Country} from '@/entities/Country/model/consts/country';
import {Currency} from '@/entities/Currency/model/consts/currency';

describe('fetchProfileData', () => {
	test('should be fulfilled/profileData', async () => {
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
		const thunk = new TestAsyncThunk(fetchProfileData);
		thunk.api.get.mockReturnValue(Promise.resolve({data: profileData}));
		const result = await thunk.callThunk('1');

		expect(thunk.dispatch).toHaveBeenCalledTimes(2);
		expect(thunk.api.get).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe('fulfilled');
		expect(result.payload).toEqual(profileData);
	});
	test('should be rejected/error if get status 403', async () => {
		const thunk = new TestAsyncThunk(fetchProfileData);
		thunk.api.get.mockReturnValue(Promise.resolve({status: 403}));
		const result = await thunk.callThunk('1');

		expect(thunk.dispatch).toHaveBeenCalledTimes(2);
		expect(thunk.api.get).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe('rejected');
		expect(result.payload).toBe('error');
	});
});
