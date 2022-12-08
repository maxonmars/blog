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
import { Text, TextSize, TextVariant } from './Text';
export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        children: 'Some text',
    },
};
var Template = function (args) { return _jsx(Text, __assign({}, args)); };
export var Default = Template.bind({});
Default.args = {};
export var Red = Template.bind({});
Red.args = {
    variant: TextVariant.RED,
};
export var Small = Template.bind({});
Small.args = {
    size: TextSize.SM,
};
export var Large = Template.bind({});
Large.args = {
    size: TextSize.LG,
};
//# sourceMappingURL=Text.stories.js.map