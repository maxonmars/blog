import { selectProfileIsLoading } from './selectProfileIsLoading';
describe('selectProfileIsLoading', function () {
    test('should be true for isLoading', function () {
        var state = {
            profile: {
                isLoading: true,
            },
        };
        expect(selectProfileIsLoading(state)).toBe(true);
    });
    test('should be undefined if empty selectProfileIsLoading', function () {
        var state = {};
        expect(selectProfileIsLoading(state)).toBe(undefined);
    });
});
//# sourceMappingURL=selectProfileIsLoading.test.js.map