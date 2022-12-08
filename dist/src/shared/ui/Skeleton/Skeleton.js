import { jsx as _jsx } from "react/jsx-runtime";
import module from './Skeleton.module.css';
import { classNames } from 'shared/lib/classNames/classNames';
export var Skeleton = function (_a) {
    var className = _a.className, width = _a.width, height = _a.height, borderRadius = _a.borderRadius;
    var styles = {
        width: width,
        height: height,
        borderRadius: borderRadius,
    };
    return (_jsx("div", { className: classNames([module.skeleton, className]), style: styles }));
};
//# sourceMappingURL=Skeleton.js.map