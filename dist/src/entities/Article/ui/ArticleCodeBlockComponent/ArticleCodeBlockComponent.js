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
import { jsx as _jsx } from "react/jsx-runtime";
import module from './ArticleCodeBlockComponent.module.css';
import { classNames } from 'shared/lib/classNames/classNames';
import { Code } from 'shared/ui/Code/Code';
export var ArticleCodeBlockComponent = function (_a) {
    var className = _a.className, block = _a.block;
    var code = block.code;
    return (_jsx("div", __assign({ className: classNames([module.ArticleCodeBlockComponent, className]) }, { children: _jsx(Code, { children: code }) })));
};
//# sourceMappingURL=ArticleCodeBlockComponent.js.map