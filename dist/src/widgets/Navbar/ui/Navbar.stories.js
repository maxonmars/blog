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
import { Navbar } from './Navbar';
import { themeDecorator } from 'shared/lib/storybook/ThemeDecorator';
import { Theme } from 'shared/lib/theme';
import { storeDecorator } from 'shared/lib/storybook/StoreDecorator';
export default {
    title: 'widgets/Navbar',
    component: Navbar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};
var Template = function (args) { return _jsx(Navbar, __assign({}, args)); };
export var Light = Template.bind({});
Light.args = {};
Light.decorators = [storeDecorator({ login: { username: 'ds', password: 'dw1d' } })];
export var Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [themeDecorator(Theme.DARK), storeDecorator({ login: { username: 'ds', password: 'dw1d' } })];
//# sourceMappingURL=Navbar.stories.js.map