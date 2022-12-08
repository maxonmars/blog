import { selectEditableProfileData } from './selectEditableProfileData';
import AvatarImg from 'shared/assets/tests/image/avatar-stories.jpeg';
import { Currency } from 'entities/Currency/model/types/currency';
import { Country } from 'entities/Country/model/types/country';
describe('selectEditableProfileData', function () {
    test('should be full editableProfileData', function () {
        var editableProfileData = {
            firstName: 'Max',
            lastName: 'Mars',
            age: 22,
            username: 'Admin13',
            city: 'Irkutsk',
            avatar: AvatarImg,
            currency: Currency.RUB,
            country: Country.Russia,
        };
        var state = {
            profile: {
                editableProfileData: editableProfileData,
            },
        };
        expect(selectEditableProfileData(state)).toEqual(editableProfileData);
    });
    test('should be undefined if empty editableProfileData', function () {
        var state = {};
        expect(selectEditableProfileData(state)).toBe(undefined);
    });
});
//# sourceMappingURL=selectEditableProfileData.test.js.map