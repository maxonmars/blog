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
import module from './ArticleViewSelector.module.css';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleView } from 'entities/Article';
import { IcoThinGrid2, IcoThinListUl } from 'shared/assets/icons';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
var viewTypes = [
    {
        view: ArticleView.GRID,
        Icon: IcoThinGrid2,
    },
    {
        view: ArticleView.LIST,
        Icon: IcoThinListUl,
    },
];
export var ArticleViewSelector = function (_a) {
    var className = _a.className, onViewChange = _a.onViewChange, view = _a.view;
    var handleClick = function (view) { return function () {
        onViewChange(view);
    }; };
    return (_jsx("div", __assign({ className: classNames([module.articleViewSelector, className]) }, { children: viewTypes.map(function (viewType) {
            return (_jsx(Button, __assign({ onClick: handleClick(viewType.view), variant: ButtonVariant.SUBTLE }, { children: _jsx(viewType.Icon, { width: 20, className: viewType.view === view ? module.selected : undefined }) }), viewType.view));
        }) })));
};
//# sourceMappingURL=ArticleViewSelector.js.map