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
import { Code } from './Code';
import { themeDecorator } from 'shared/lib/storybook/ThemeDecorator';
import { Theme } from 'shared/lib/theme';
export default {
    title: 'shared/Code',
    component: Code,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        children: 'const Template: StoryType = args => <Code {...args}/>;\n'
            + '\n'
            + 'export const Default = Template.bind({});\n'
            + 'Default.args = {};\n'
            + '\n'
            + 'Default.decorators = [];',
    },
};
var Template = function (args) { return _jsx(Code, __assign({}, args)); };
export var Default = Template.bind({});
Default.args = {};
export var Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [themeDecorator(Theme.DARK)];
export var Bacterium = Template.bind({});
Bacterium.args = {};
Bacterium.decorators = [themeDecorator(Theme.BACTERIUM)];
//# sourceMappingURL=Code.stories.js.map