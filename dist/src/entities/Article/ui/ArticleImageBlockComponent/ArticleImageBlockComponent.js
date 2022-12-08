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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import module from './ArticleImageBlockComponent.module.css';
import { classNames } from 'shared/lib/classNames/classNames';
export var ArticleImageBlockComponent = function (_a) {
    var className = _a.className, block = _a.block;
    var src = block.src, title = block.title;
    return (_jsx("div", __assign({ className: classNames([module.articleImageBlockComponent, className]) }, { children: _jsxs("figure", __assign({ className: "sign" }, { children: [_jsx("img", { className: module.image, src: src, alt: title !== null && title !== void 0 ? title : 'изображение' }), title && _jsx("figcaption", __assign({ className: module.caption }, { children: title }))] })) })));
};
//# sourceMappingURL=ArticleImageBlockComponent.js.map