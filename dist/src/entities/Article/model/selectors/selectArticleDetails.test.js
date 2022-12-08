import { selectArticleDetailsData, selectArticleDetailsIsLoading, selectArticleDetailsError } from './selectArticleDetails';
describe('selectArticleDetails', function () {
    test('should be select equal data', function () {
        var data = {
            id: '1',
            title: 'test title',
        };
        var state = {
            articleDetails: {
                data: data,
            },
        };
        expect(selectArticleDetailsData(state)).toEqual(data);
    });
    test('should be undefined if empty selectArticleDetailsData', function () {
        var state = {};
        expect(selectArticleDetailsData(state)).toBe(undefined);
    });
    test('should be select isLoading true', function () {
        var state = {
            articleDetails: {
                isLoading: true,
            },
        };
        expect(selectArticleDetailsIsLoading(state)).toBe(true);
    });
    test('should be select error string', function () {
        var state = {
            articleDetails: {
                error: 'error',
            },
        };
        expect(selectArticleDetailsError(state)).toBe('error');
    });
});
//# sourceMappingURL=selectArticleDetails.test.js.map