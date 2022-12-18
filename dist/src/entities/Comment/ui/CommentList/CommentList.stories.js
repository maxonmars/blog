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
import { CommentList } from './CommentList';
import AvatarImg from 'shared/assets/tests/image/avatar-stories.jpeg';
export default {
    title: 'entities/Comment/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        comments: [
            {
                text: 'story comment 1',
                id: '1',
                user: {
                    id: '1',
                    username: 'StoryMan',
                    avatar: AvatarImg,
                },
            },
            {
                text: 'story comment 2',
                id: '1',
                user: {
                    id: '1',
                    username: 'StoryMan',
                    avatar: AvatarImg,
                },
            },
            {
                text: 'story comment 3',
                id: '1',
                user: {
                    id: '1',
                    username: 'StoryMan',
                    avatar: AvatarImg,
                },
            },
        ],
    },
};
var Template = function (args) { return _jsx(CommentList, __assign({}, args)); };
export var Default = Template.bind({});
Default.args = {};
Default.decorators = [];
export var Loading = Template.bind({});
Loading.args = {
    isLoading: true,
    comments: undefined,
};
//# sourceMappingURL=CommentList.stories.js.map