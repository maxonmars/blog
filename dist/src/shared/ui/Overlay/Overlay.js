import { jsx as _jsx } from "react/jsx-runtime";
import module from './Overlay.module.css';
import { classNames } from 'shared/lib/classNames/classNames';
export var Overlay = function (_a) {
    var className = _a.className, onClose = _a.onClose;
    return (_jsx("div", { onClick: onClose, className: classNames([module.overlay, className]) }));
};
//# sourceMappingURL=Overlay.js.map