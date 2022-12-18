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
import AddCommentForm from './AddCommentForm';
import { storeDecorator } from 'shared/lib/storybook/StoreDecorator';
export default {
    title: 'features/AddCommentForm',
    component: AddCommentForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {},
};
var Template = function (args) { return _jsx(AddCommentForm, __assign({}, args)); };
export var Default = Template.bind({});
Default.args = {};
Default.decorators = [storeDecorator({ addCommentForm: {} })];
//# sourceMappingURL=AddCommentForm.stories.js.map