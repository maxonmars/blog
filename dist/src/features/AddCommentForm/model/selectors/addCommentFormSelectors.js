export var selectCommentFormText = function (state) {
    var _a, _b;
    return (_b = (_a = state.addCommentForm) === null || _a === void 0 ? void 0 : _a.text) !== null && _b !== void 0 ? _b : '';
};
export var selectCommentFormError = function (state) {
    var _a;
    return (_a = state.addCommentForm) === null || _a === void 0 ? void 0 : _a.error;
};
//# sourceMappingURL=addCommentFormSelectors.js.map