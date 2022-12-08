import { ValidateProfileError } from 'entities/Profile/model/types/profile';
import { isSomeEnum } from 'shared/lib/isSomeEnum/isSomeEnum';
import { Country } from 'entities/Country/model/types/country';
export var validateProfileData = function (profile) {
    var errors = [];
    if (!profile) {
        errors.push(ValidateProfileError.NO_DATA);
        return errors;
    }
    var lastName = profile.lastName, firstName = profile.firstName, age = profile.age, country = profile.country;
    if (!lastName || !firstName) {
        errors.push(ValidateProfileError.INCORRECT_USER_DATA);
    }
    if (!Number.isInteger(Number(age))) {
        errors.push(ValidateProfileError.INCORRECT_AGE);
    }
    var isCountry = isSomeEnum(Country);
    if (!isCountry(country)) {
        errors.push(ValidateProfileError.INCORRECT_COUNTRY);
    }
    return errors;
};
//# sourceMappingURL=validateProfileData.js.map