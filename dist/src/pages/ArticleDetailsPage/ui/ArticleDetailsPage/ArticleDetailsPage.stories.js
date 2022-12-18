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
import ArticleDetailsPage from './ArticleDetailsPage';
import { storeDecorator } from 'shared/lib/storybook/StoreDecorator';
export default {
    title: 'pages/ArticleDetailsPage',
    component: ArticleDetailsPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {},
};
var Template = function (args) { return _jsx(ArticleDetailsPage, __assign({}, args)); };
export var Default = Template.bind({});
Default.args = {};
Default.decorators = [storeDecorator({ articleDetailsPage: { comments: { entities: { 1: { text: 'dsds', user: { id: '1', username: 'dw', avatar: '' }, id: '1' } } } } })];
//# sourceMappingURL=ArticleDetailsPage.stories.js.map