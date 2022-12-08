var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
export var classNames = function (classes, mods) {
    if (classes === void 0) { classes = []; }
    if (mods === void 0) { mods = {}; }
    return __spreadArray(__spreadArray([], classes, true), Object.entries(mods)
        .filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value;
    })
        .map(function (_a) {
        var className = _a[0];
        return className;
    }), true).join(' ').trim();
};
//# sourceMappingURL=classNames.js.map