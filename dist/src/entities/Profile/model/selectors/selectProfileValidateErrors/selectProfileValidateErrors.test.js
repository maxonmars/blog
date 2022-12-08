import { selectProfileValidateErrors } from './selectProfileValidateErrors';
import { ValidateProfileError } from 'entities/Profile/model/types/profile';
describe('selectProfileValidateErrors', function () {
    test('should be true is read only', function () {
        var state = {
            profile: {
                validateErrors: [ValidateProfileError.SERVER_ERROR, ValidateProfileError.INCORRECT_USER_DATA],
            },
        };
        expect(selectProfileValidateErrors(state))
            .toEqual([ValidateProfileError.SERVER_ERROR, ValidateProfileError.INCORRECT_USER_DATA]);
    });
    test('should be undefined if empty selectProfileValidateErrors', function () {
        var state = {};
        expect(selectProfileValidateErrors(state)).toBe(undefined);
    });
});
//# sourceMappingURL=selectProfileValidateErrors.test.js.map