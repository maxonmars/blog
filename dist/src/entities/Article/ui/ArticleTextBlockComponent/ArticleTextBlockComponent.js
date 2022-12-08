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
import module from './ArticleTextBlockComponent.module.css';
import { classNames } from 'shared/lib/classNames/classNames';
import { Title } from 'shared/ui/Title/Title';
import { Text } from 'shared/ui/Text/Text';
export var ArticleTextBlockComponent = function (_a) {
    var className = _a.className, block = _a.block;
    var type = block.type, id = block.id, title = block.title, paragraphs = block.paragraphs;
    return (_jsxs("div", __assign({ className: classNames([module.articleTextBlockComponent, className]) }, { children: [title && _jsx(Title, __assign({ order: 3 }, { children: title })), paragraphs.map(function (paragraph, index) {
                return (_jsx(Text, { children: paragraph }, index));
            })] })));
};
//# sourceMappingURL=ArticleTextBlockComponent.js.map