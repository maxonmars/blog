export var getQueryParams = function (params) {
    var searchParams = new URLSearchParams(window.location.search);
    Object.entries(params).forEach(function (_a) {
        var name = _a[0], value = _a[1];
        if (value !== undefined && value !== null) {
            searchParams.set(name, value);
        }
    });
    return "?".concat(searchParams.toString());
};
/**
 * Функция добавления параметров строки запроса в URL
 * @param params
 */
export var addQueryParams = function (params) {
    window.history.pushState(null, '', getQueryParams(params));
};
//# sourceMappingURL=addQueryParams.js.map