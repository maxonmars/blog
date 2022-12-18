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
import { Tabs } from './Tabs';
import { action } from '@storybook/addon-actions';
export default {
    title: 'shared/Tabs',
    component: Tabs,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        tabs: [
            {
                value: 'tab1',
                content: 'tab1',
            },
            {
                value: 'tab2',
                content: 'tab2',
            },
            {
                value: 'tab3',
                content: 'tab3',
            },
        ],
        selectedValue: 'tab2',
        onTabClick: action('onTabClick'),
    },
};
var Template = function (args) { return _jsx(Tabs, __assign({}, args)); };
export var Default = Template.bind({});
Default.args = {};
Default.decorators = [];
//# sourceMappingURL=Tabs.stories.js.map