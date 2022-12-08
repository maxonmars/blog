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
import { Title } from './Title';
export default {
    title: 'shared/Title',
    component: Title,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        children: 'Some title',
    },
};
var Template = function (args) { return _jsx(Title, __assign({}, args)); };
export var DefaultOrder1 = Template.bind({});
DefaultOrder1.args = {};
export var Order2 = Template.bind({});
Order2.args = {
    order: 2,
};
export var Order3 = Template.bind({});
Order3.args = {
    order: 3,
};
//# sourceMappingURL=Title.stories.js.map