import { createSlice } from '@reduxjs/toolkit';
import { USER_LOCAL_STORAGE_KEY } from 'shared/const/localStorage';
var initialState = {
    isInit: false,
};
var userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setAuthData: function (state, action) {
            state.authData = action.payload;
        },
        initAuthData: {
            reducer: function (state, action) {
                state.isInit = true;
                state.authData = action.payload;
            },
            prepare: function () {
                var user = localStorage.getItem(USER_LOCAL_STORAGE_KEY);
                if (user) {
                    return { payload: JSON.parse(user) };
                }
                return { payload: undefined };
            },
        },
        logout: function (state) {
            state.authData = undefined;
            localStorage.removeItem(USER_LOCAL_STORAGE_KEY);
        },
    },
});
export var userActions = userSlice.actions, userReducer = userSlice.reducer;
//# sourceMappingURL=userSlice.js.map