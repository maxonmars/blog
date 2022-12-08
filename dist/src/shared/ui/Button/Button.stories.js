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
import { Button, ButtonRadius, ButtonSize, ButtonVariant } from './Button';
import { themeDecorator } from 'shared/lib/storybook/ThemeDecorator';
import { Theme } from 'shared/lib/theme';
export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};
var Template = function (args) { return (_jsx("div", __assign({ style: { padding: '10px' } }, { children: _jsx(Button, __assign({}, args)) }))); };
export var Default = Template.bind({});
Default.args = {
    variant: ButtonVariant.DEFAULT,
    children: 'click me',
};
export var DefaultSquare = Template.bind({});
DefaultSquare.args = {
    variant: ButtonVariant.DEFAULT,
    children: '>',
    square: true,
};
export var DefaultSquareLarge = Template.bind({});
DefaultSquareLarge.args = {
    variant: ButtonVariant.DEFAULT,
    children: '>',
    square: true,
    size: ButtonSize.LG,
};
export var DefaultSquareSmall = Template.bind({});
DefaultSquareSmall.args = {
    variant: ButtonVariant.DEFAULT,
    children: '>',
    square: true,
    size: ButtonSize.SM,
};
export var Outline = Template.bind({});
Outline.args = {
    variant: ButtonVariant.OUTLINE,
    children: 'click me',
};
export var OutlineSmall = Template.bind({});
OutlineSmall.args = {
    variant: ButtonVariant.OUTLINE,
    children: 'click me',
    size: ButtonSize.SM,
};
export var OutlineLarge = Template.bind({});
OutlineLarge.args = {
    variant: ButtonVariant.OUTLINE,
    children: 'click me',
    size: ButtonSize.LG,
};
export var OutlineRadiusS = Template.bind({});
OutlineRadiusS.args = {
    variant: ButtonVariant.OUTLINE,
    children: 'click me',
    radius: ButtonRadius.SM,
};
export var OutlineRadiusL = Template.bind({});
OutlineRadiusL.args = {
    variant: ButtonVariant.OUTLINE,
    children: 'click me',
    radius: ButtonRadius.LG,
};
export var OutlineInvertedRadiusL = Template.bind({});
OutlineInvertedRadiusL.args = {
    variant: ButtonVariant.OUTLINE,
    children: 'click me',
    radius: ButtonRadius.LG,
    inverted: true,
};
export var OutlineWithDarkTheme = Template.bind({});
OutlineWithDarkTheme.args = {
    variant: ButtonVariant.OUTLINE,
    children: 'click me',
};
OutlineWithDarkTheme.decorators = [themeDecorator(Theme.DARK)];
export var OutlineInvertedWithDarkTheme = Template.bind({});
OutlineInvertedWithDarkTheme.args = {
    variant: ButtonVariant.OUTLINE,
    children: 'click me',
    inverted: true,
};
OutlineInvertedWithDarkTheme.decorators = [themeDecorator(Theme.DARK)];
export var Subtle = Template.bind({});
Subtle.args = {
    variant: ButtonVariant.SUBTLE,
    children: 'click me',
};
export var Filled = Template.bind({});
Filled.args = {
    variant: ButtonVariant.FILLED,
    children: 'click me',
};
export var FilledCompact = Template.bind({});
FilledCompact.args = {
    variant: ButtonVariant.FILLED,
    children: 'click me',
    compact: true,
};
export var FilledUppercase = Template.bind({});
FilledUppercase.args = {
    variant: ButtonVariant.FILLED,
    children: 'click me',
    uppercase: true,
};
export var FilledWithDarkTheme = Template.bind({});
FilledWithDarkTheme.args = {
    variant: ButtonVariant.FILLED,
    children: 'click me',
};
FilledWithDarkTheme.decorators = [themeDecorator(Theme.DARK)];
export var FilledUppercaseCompactInvertedWithDarkTheme = Template.bind({});
FilledUppercaseCompactInvertedWithDarkTheme.args = {
    variant: ButtonVariant.FILLED,
    children: 'click me',
    uppercase: true,
    compact: true,
    inverted: true,
};
FilledUppercaseCompactInvertedWithDarkTheme.decorators = [themeDecorator(Theme.DARK)];
//# sourceMappingURL=Button.stories.js.map