import { loginActions, loginReducer } from './loginSlice';
import { loginByUsername } from '../services/loginByUsername';
describe('loginSlice', function () {
    test('should be changed username', function () {
        var state = {
            username: 'Adam',
        };
        expect(loginReducer(state, loginActions.setUsername('Hype')))
            .toEqual({ username: 'Hype' });
    });
    test('should be changed password', function () {
        var state = {
            password: '123',
        };
        expect(loginReducer(state, loginActions.setPassword('123')))
            .toEqual({ password: '123' });
    });
    test('should be changed isLoading if asyncThunk pending', function () {
        var state = {
            isLoading: false,
        };
        expect(loginReducer(state, loginByUsername.pending))
            .toEqual({ isLoading: true });
    });
    test('should be changed isLoading if asyncThunk fulfilled', function () {
        var state = {
            isLoading: true,
        };
        expect(loginReducer(state, loginByUsername.fulfilled))
            .toEqual({ isLoading: false });
    });
    test('should be changed isLoading if asyncThunk rejected', function () {
        var state = {
            isLoading: true,
        };
        expect(loginReducer(state, loginByUsername.rejected))
            .toEqual({ isLoading: false });
    });
});
//# sourceMappingURL=loginSlice.test.js.map