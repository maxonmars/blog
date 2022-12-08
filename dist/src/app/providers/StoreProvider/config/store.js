var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from 'entities/User';
import { createReducerManager } from './reducerManager';
import { $api } from 'shared/api/api';
export var createReduxStore = function (initialState, asyncReducers, navigate) {
    var rootReducers = __assign(__assign({}, asyncReducers), { user: userReducer });
    var reducerManager = createReducerManager(rootReducers);
    var store = configureStore({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: function (getDefaultMiddleware) { return getDefaultMiddleware({
            thunk: {
                extraArgument: {
                    api: $api,
                    navigate: navigate,
                },
            },
        }); },
    });
    return Object.assign(store, { reducerManager: reducerManager });
};
//# sourceMappingURL=store.js.map