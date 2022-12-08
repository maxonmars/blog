import { useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
export var DynamicModuleLoader = function (props) {
    var children = props.children, reducers = props.reducers, _a = props.isRemoveAfterUnmount, isRemoveAfterUnmount = _a === void 0 ? true : _a;
    var dispatch = useDispatch();
    var store = useStore();
    useEffect(function () {
        Object.entries(reducers).forEach(function (_a) {
            var reducerKey = _a[0], reducer = _a[1];
            dispatch({ type: "@INIT ".concat(reducerKey, " reducer") });
            store.reducerManager.add(reducerKey, reducer);
        });
        return function () {
            if (isRemoveAfterUnmount) {
                Object.entries(reducers).forEach(function (_a) {
                    var reducerKey = _a[0];
                    dispatch({ type: "@DESTROY ".concat(reducerKey, " reducer") });
                    store.reducerManager.remove(reducerKey);
                });
            }
        };
    }, [dispatch, isRemoveAfterUnmount, reducers, store.reducerManager]);
    return children;
};
//# sourceMappingURL=DynamicModuleLoader.js.map