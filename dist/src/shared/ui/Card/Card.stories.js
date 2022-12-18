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
import { Card, CardVariant } from './Card';
import { Text } from 'shared/ui/Text/Text';
export default {
    title: 'shared/Card',
    component: Card,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {},
};
var Template = function (args) {
    return _jsx("div", __assign({ style: { width: '150px' } }, { children: _jsx(Card, __assign({}, args, { children: _jsx("div", __assign({ style: { height: '200px' } }, { children: _jsx(Text, { children: "Card contend" }) })) })) }));
};
export var Default = Template.bind({});
Default.args = {};
Default.decorators = [];
export var Outline = Template.bind({});
Outline.args = {
    variant: CardVariant.OUTLINE,
};
//# sourceMappingURL=Card.stories.js.map