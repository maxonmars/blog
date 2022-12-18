import { createSlice } from '@reduxjs/toolkit';
var initialState = {
    scroll: { sdd: 0 },
};
var restorationScrollSlice = createSlice({
    name: 'restorationScroll',
    initialState: initialState,
    reducers: {
        setScrollPosition: function (state, _a) {
            var payload = _a.payload;
            state.scroll[payload.path] = payload.position;
        },
    },
});
export var restorationScrollActions = restorationScrollSlice.actions, restorationScrollReducer = restorationScrollSlice.reducer;
//# sourceMappingURL=restorationScrollSlice.js.map