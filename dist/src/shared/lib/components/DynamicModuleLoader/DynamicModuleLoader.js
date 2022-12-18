import { useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
export var DynamicModuleLoader = function (props) {
    var children = props.children, reducers = props.reducers, isRemoveAfterUnmount = props.isRemoveAfterUnmount;
    var dispatch = useDispatch();
    var store = useStore();
    useEffect(function () {
        var reducerMap = store.reducerManager.getReducerMap();
        Object.entries(reducers).forEach(function (_a) {
            var reducerKey = _a[0], reducer = _a[1];
            var isMounted = Boolean(reducerMap[reducerKey]);
            if (!isMounted) {
                store.reducerManager.add(reducerKey, reducer);
                dispatch({ type: "@INIT ".concat(reducerKey, " reducer") });
            }
        });
        return function () {
            if (isRemoveAfterUnmount) {
                Object.entries(reducers).forEach(function (_a) {
                    var reducerKey = _a[0];
                    store.reducerManager.remove(reducerKey);
                    dispatch({ type: "@DESTROY ".concat(reducerKey, " reducer") });
                });
            }
        };
    }, [dispatch, isRemoveAfterUnmount, reducers, store.reducerManager]);
    return children;
};
//# sourceMappingURL=DynamicModuleLoader.js.map