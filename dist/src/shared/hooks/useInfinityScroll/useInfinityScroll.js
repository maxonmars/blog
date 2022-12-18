import { useEffect, useRef } from 'react';
export var useInfinityScroll = function (_a) {
    var callback = _a.callback, wrapperRef = _a.wrapperRef, triggerRef = _a.triggerRef;
    var observer = useRef();
    useEffect(function () {
        var wrapperElement = wrapperRef.current;
        var triggerElement = triggerRef.current;
        if (callback) {
            var options = {
                root: wrapperElement,
                rootMargin: '0px',
                threshold: 1.0,
            };
            observer.current = new IntersectionObserver(function (_a) {
                var entry = _a[0];
                if (entry.isIntersecting) {
                    callback();
                }
            }, options);
            observer.current.observe(triggerElement);
        }
        return function () {
            if (observer.current && triggerElement) {
                observer.current.unobserve(triggerElement);
            }
        };
    }, [callback, triggerRef, wrapperRef]);
};
//# sourceMappingURL=useInfinityScroll.js.map