import { selectLoginIsLoading } from './selectLoginIsLoading';
describe('selectLoginIsLoading', function () {
    test('should be true', function () {
        var state = {
            login: {
                isLoading: true,
            },
        };
        expect(selectLoginIsLoading(state)).toBe(true);
    });
    test('should be false if empty state', function () {
        var state = {};
        expect(selectLoginIsLoading(state)).toBe(false);
    });
});
//# sourceMappingURL=selectLoginIsLoading.test.js.map