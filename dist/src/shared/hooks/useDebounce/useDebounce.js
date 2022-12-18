import { useCallback, useRef } from 'react';
export var useDebounce = function (collback, delay) {
    var timer = useRef();
    return useCallback(function () {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = setTimeout(function () {
            collback();
        }, delay);
    }, [delay, collback]);
};
//# sourceMappingURL=useDebounce.js.map