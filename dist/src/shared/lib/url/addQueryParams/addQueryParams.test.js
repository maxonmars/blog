import { getQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams';
describe('addQueryParams', function () {
    test('should be one value', function () {
        var params = getQueryParams({
            test: 'value',
        });
        expect(params).toBe('?test=value');
    });
    test('should be two value', function () {
        var params = getQueryParams({
            test: 'value',
            testTwo: 'twoValue',
        });
        expect(params).toBe('?test=value&testTwo=twoValue');
    });
    test('should be one value', function () {
        var params = getQueryParams({
            test: 'value',
            testTwo: undefined,
        });
        expect(params).toBe('?test=value');
    });
    test('should be - ?', function () {
        var params = getQueryParams({});
        expect(params).toBe('?');
    });
});
//# sourceMappingURL=addQueryParams.test.js.map