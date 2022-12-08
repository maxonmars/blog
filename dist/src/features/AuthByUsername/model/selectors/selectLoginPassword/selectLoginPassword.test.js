import { selectLoginPassword } from './selectLoginPassword';
describe('selectLoginPassword', function () {
    test('should be password string', function () {
        var state = {
            login: {
                password: '123',
            },
        };
        expect(selectLoginPassword(state)).toBe('123');
    });
    test('should be empty string if empty state', function () {
        var state = {};
        expect(selectLoginPassword(state)).toBe('');
    });
});
//# sourceMappingURL=selectLoginPassword.test.js.map