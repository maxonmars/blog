export var isSomeEnum = function (e) {
    return function (token) {
        return Object.values(e).includes(token);
    };
};
//# sourceMappingURL=isSomeEnum.js.map