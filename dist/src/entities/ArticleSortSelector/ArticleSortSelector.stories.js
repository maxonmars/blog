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
import { ArticleSortSelector } from './ArticleSortSelector';
export default {
    title: 'entities/Article/ArticleSortSelector',
    component: ArticleSortSelector,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {},
};
var Template = function (args) { return _jsx(ArticleSortSelector, __assign({}, args)); };
export var Default = Template.bind({});
Default.args = {};
Default.decorators = [];
//# sourceMappingURL=ArticleSortSelector.stories.js.map