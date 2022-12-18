import { useCallback, useRef } from 'react';
export var useThrottle = function (callback, delay) {
    var throttleRef = useRef(false);
    return useCallback(function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!throttleRef.current) {
            callback.apply(void 0, args);
            throttleRef.current = true;
            setTimeout(function () {
                throttleRef.current = false;
            }, delay);
        }
    }, [callback, delay]);
};
//# sourceMappingURL=useThrottle.js.map