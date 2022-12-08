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
import { Avatar, AvatarSize } from './Avatar';
import { themeDecorator } from 'shared/lib/storybook/ThemeDecorator';
import { Theme } from 'shared/lib/theme';
import AvatarImg from '../../assets/tests/image/avatar-stories.jpeg';
export default {
    title: 'shared/Avatar',
    component: Avatar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        src: AvatarImg,
    },
};
var Template = function (args) { return _jsx(Avatar, __assign({}, args)); };
export var Light = Template.bind({});
Light.args = {
    size: AvatarSize.LG,
};
export var Dark = Template.bind({});
Dark.args = {
    size: AvatarSize.MD,
};
Dark.decorators = [themeDecorator(Theme.DARK)];
//# sourceMappingURL=Avatar.stories.js.map