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
import { Skeleton } from './Skeleton';
import { themeDecorator } from 'shared/lib/storybook/ThemeDecorator';
import { Theme } from 'shared/lib/theme';
export default {
    title: 'shared/Skeleton',
    component: Skeleton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        width: '100%',
        height: 200,
    },
};
var Template = function (args) { return _jsx(Skeleton, __assign({}, args)); };
export var Default = Template.bind({});
Default.args = {};
export var Circle = Template.bind({});
Circle.args = {
    borderRadius: '50%',
    width: 100,
    height: 100,
};
export var Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [themeDecorator(Theme.DARK)];
export var DarkCircle = Template.bind({});
DarkCircle.args = {
    borderRadius: '50%',
    width: 100,
    height: 100,
};
DarkCircle.decorators = [themeDecorator(Theme.DARK)];
export var Bacterium = Template.bind({});
Bacterium.args = {};
Bacterium.decorators = [themeDecorator(Theme.BACTERIUM)];
export var BacteriumCircle = Template.bind({});
BacteriumCircle.args = {
    borderRadius: '50%',
    width: 100,
    height: 100,
};
BacteriumCircle.decorators = [themeDecorator(Theme.BACTERIUM)];
//# sourceMappingURL=Skeleton.stories.js.map