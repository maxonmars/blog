import { selectLoginUsername } from './selectLoginUsername';
describe('selectLoginUsername', function () {
    test('should be username string', function () {
        var state = {
            login: {
                username: 'Adam',
            },
        };
        expect(selectLoginUsername(state)).toBe('Adam');
    });
    test('should be empty string if empty state', function () {
        var state = {};
        expect(selectLoginUsername(state)).toBe('');
    });
});
//# sourceMappingURL=selectLoginUsername.test.js.map