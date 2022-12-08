import { profileActions, profileReducer } from './profileSlice';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
import AvatarImg from 'shared/assets/tests/image/avatar-stories.jpeg';
import { Currency } from 'entities/Currency/model/types/currency';
import { Country } from 'entities/Country/model/types/country';
var profileData = {
    firstName: 'Max',
    lastName: 'Mars',
    age: 22,
    username: 'Admin13',
    city: 'Irkutsk',
    avatar: AvatarImg,
    currency: Currency.RUB,
    country: Country.Russia,
};
describe('profileSlice', function () {
    test('should be changed isReadonly as false', function () {
        var state = {
            isReadonly: true,
        };
        expect(profileReducer(state, profileActions.editableProfileForm()))
            .toEqual({ isReadonly: false });
    });
    test('should be changed username', function () {
        var state = {
            editableProfileData: {
                username: 'Max',
            },
        };
        expect(profileReducer(state, profileActions.editProfile({ username: 'Aman' })))
            .toEqual({
            editableProfileData: {
                username: 'Aman',
            },
        });
    });
    test('should be changed isReadonly as true', function () {
        var state = {
            isReadonly: false,
        };
        expect(profileReducer(state, profileActions.cancelEditProfile))
            .toEqual({ isReadonly: true });
    });
    test('should be changed isLoading if fetchProfileData pending', function () {
        var state = {
            isLoading: false,
        };
        expect(profileReducer(state, fetchProfileData.pending))
            .toEqual({ isLoading: true });
    });
    test('should be changed isLoading if fetchProfileData fulfilled', function () {
        var state = {
            isLoading: true,
        };
        expect(profileReducer(state, fetchProfileData.fulfilled(profileData, '', '1')))
            .toEqual({
            isLoading: false,
            editableProfileData: profileData,
            readonlyProfileData: profileData,
        });
    });
});
//# sourceMappingURL=profileSlice.test.js.map