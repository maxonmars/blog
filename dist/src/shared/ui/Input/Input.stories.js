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
import { Input } from './Input';
import { themeDecorator } from 'shared/lib/storybook/ThemeDecorator';
import { Theme } from 'shared/lib/theme';
import { useState } from 'react';
export default {
    title: 'shared/Input',
    component: Input,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        placeholder: 'placeholder',
    },
};
var Template = function (args) {
    var _a = useState(''), value = _a[0], setValue = _a[1];
    return _jsx(Input, __assign({}, args, { onChange: setValue, value: value }));
};
export var Light = Template.bind({});
Light.args = {};
export var Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [themeDecorator(Theme.DARK)];
//# sourceMappingURL=Input.stories.js.map