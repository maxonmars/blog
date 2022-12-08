import { jsx as _jsx } from "react/jsx-runtime";
import AboutPage from './AboutPage';
import { themeDecorator } from 'shared/lib/storybook/ThemeDecorator';
import { Theme } from 'shared/lib/theme';
export default {
    title: 'pages/AboutPage',
    component: AboutPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};
var Template = function () { return _jsx(AboutPage, {}); };
export var Light = Template.bind({});
Light.args = {};
export var Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [themeDecorator(Theme.DARK)];
//# sourceMappingURL=AboutPage.stories.js.map