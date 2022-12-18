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
import { CommentCard } from './CommentCard';
import AvatarImg from 'shared/assets/tests/image/avatar-stories.jpeg';
export default {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        comment: {
            text: 'story comment',
            id: '1',
            user: {
                id: '1',
                username: 'StoryMan',
                avatar: AvatarImg,
            },
        },
    },
};
var Template = function (args) { return _jsx(CommentCard, __assign({}, args)); };
export var Default = Template.bind({});
Default.args = {};
Default.decorators = [];
export var Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};
//# sourceMappingURL=CommentCard.stories.js.map