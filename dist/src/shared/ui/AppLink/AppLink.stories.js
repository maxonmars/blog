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
import { AppLink } from './AppLink';
import { themeDecorator } from 'shared/lib/storybook/ThemeDecorator';
import { Theme } from 'shared/lib/theme';
export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
        children: 'Link',
    },
};
var Template = function (args) { return _jsx(AppLink, __assign({}, args)); };
export var Main = Template.bind({});
Main.args = {};
export var Inverted = Template.bind({});
Inverted.args = {};
Inverted.decorators = [themeDecorator(Theme.DARK)];
//# sourceMappingURL=AppLink.stories.js.map