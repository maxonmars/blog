import { selectProfileIsReadonly } from './selectProfileIsReadonly';
describe('selectProfileIsReadonly', function () {
    test('should be true is read only', function () {
        var state = {
            profile: {
                isReadonly: true,
            },
        };
        expect(selectProfileIsReadonly(state)).toBe(true);
    });
    test('should be undefined if empty selectProfileIsReadonly', function () {
        var state = {};
        expect(selectProfileIsReadonly(state)).toBe(undefined);
    });
});
//# sourceMappingURL=selectProfileIsReadonly.test.js.map