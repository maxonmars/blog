import { selectProfileError } from './selectProfileError';
describe('selectProfileError', function () {
    test('should be text error', function () {
        var state = {
            profile: {
                error: 'error',
            },
        };
        expect(selectProfileError(state)).toBe('error');
    });
    test('should be undefined if empty selectProfileError', function () {
        var state = {};
        expect(selectProfileError(state)).toBe(undefined);
    });
});
//# sourceMappingURL=selectProfileError.test.js.map