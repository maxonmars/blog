import { selectLoginError } from './selectLoginError';
describe('selectLoginError', function () {
    test('should be string error', function () {
        var state = {
            login: {
                error: 'error',
            },
        };
        expect(selectLoginError(state)).toBe('error');
    });
    test('should be undefined if empty state', function () {
        var state = {};
        expect(selectLoginError(state)).toBe(undefined);
    });
});
//# sourceMappingURL=selectLoginError.test.js.map