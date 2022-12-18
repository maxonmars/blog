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
import { ArticleViewSelector } from './ArticleViewSelector';
export default {
    title: 'features/Article/ArticleViewSelector',
    component: ArticleViewSelector,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {},
};
var Template = function (args) { return _jsx(ArticleViewSelector, __assign({}, args)); };
export var Default = Template.bind({});
Default.args = {};
Default.decorators = [];
//# sourceMappingURL=ArticleViewSelector.stories.js.map