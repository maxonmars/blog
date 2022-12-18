import { createSelector } from '@reduxjs/toolkit';
export var selectRestorationScroll = function (state) {
    return state.restorationScroll.scroll;
};
export var selectRestorationScrollByPath = createSelector(selectRestorationScroll, function (state, path) { return path; }, function (scroll, path) { var _a; return (_a = scroll[path]) !== null && _a !== void 0 ? _a : 0; });
//# sourceMappingURL=restorationScrollSelectors.js.map