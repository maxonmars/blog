import { useEffect } from 'react';
export var useInitialEffect = function (callback) {
    useEffect(function () {
        if (__PROJECT__ !== 'storybook') {
            callback();
        }
    }, [callback]);
};
//# sourceMappingURL=useInitialEffect.js.map