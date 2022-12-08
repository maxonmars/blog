import { jsx as _jsx } from "react/jsx-runtime";
import MainPage from './MainPage';
import { themeDecorator } from 'shared/lib/storybook/ThemeDecorator';
import { Theme } from 'shared/lib/theme';
export default {
    title: 'pages/MainPage',
    component: MainPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};
var Template = function () { return _jsx(MainPage, {}); };
export var Light = Template.bind({});
Light.args = {};
export var Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [themeDecorator(Theme.DARK)];
//# sourceMappingURL=MainPage.stories.js.map