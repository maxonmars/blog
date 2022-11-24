import type {ComponentMeta, ComponentStory} from '@storybook/react';
import {Button, ButtonRadius, ButtonSize, ButtonVariant} from './Button';
import {themeDecorator} from 'shared/lib/storybook/ThemeDecorator';
import {Theme} from 'shared/lib/theme';

type StoryType = ComponentStory<typeof Button>;

export default {
	title: 'shared/Button',
	component: Button,
	argTypes: {
		backgroundColor: {control: 'color'},
	},
} as ComponentMeta<typeof Button>;

const Template: StoryType = args => (
	<div style={{padding: '10px'}}>
		<Button {...args}/>
	</div>
);

export const Default = Template.bind({});
Default.args = {
	variant: ButtonVariant.DEFAULT,
	children: 'click me',
};

export const DefaultSquare = Template.bind({});
DefaultSquare.args = {
	variant: ButtonVariant.DEFAULT,
	children: '>',
	square: true,
};

export const DefaultSquareLarge = Template.bind({});
DefaultSquareLarge.args = {
	variant: ButtonVariant.DEFAULT,
	children: '>',
	square: true,
	size: ButtonSize.LG,
};

export const DefaultSquareSmall = Template.bind({});
DefaultSquareSmall.args = {
	variant: ButtonVariant.DEFAULT,
	children: '>',
	square: true,
	size: ButtonSize.SM,
};

export const Outline = Template.bind({});
Outline.args = {
	variant: ButtonVariant.OUTLINE,
	children: 'click me',
};

export const OutlineSmall = Template.bind({});
OutlineSmall.args = {
	variant: ButtonVariant.OUTLINE,
	children: 'click me',
	size: ButtonSize.SM,
};

export const OutlineLarge = Template.bind({});
OutlineLarge.args = {
	variant: ButtonVariant.OUTLINE,
	children: 'click me',
	size: ButtonSize.LG,
};

export const OutlineRadiusS = Template.bind({});
OutlineRadiusS.args = {
	variant: ButtonVariant.OUTLINE,
	children: 'click me',
	radius: ButtonRadius.SM,
};

export const OutlineRadiusL = Template.bind({});
OutlineRadiusL.args = {
	variant: ButtonVariant.OUTLINE,
	children: 'click me',
	radius: ButtonRadius.LG,
};

export const OutlineInvertedRadiusL = Template.bind({});
OutlineInvertedRadiusL.args = {
	variant: ButtonVariant.OUTLINE,
	children: 'click me',
	radius: ButtonRadius.LG,
	inverted: true,
};

export const OutlineWithDarkTheme = Template.bind({});
OutlineWithDarkTheme.args = {
	variant: ButtonVariant.OUTLINE,
	children: 'click me',
};
OutlineWithDarkTheme.decorators = [themeDecorator(Theme.DARK)];

export const OutlineInvertedWithDarkTheme = Template.bind({});
OutlineInvertedWithDarkTheme.args = {
	variant: ButtonVariant.OUTLINE,
	children: 'click me',
	inverted: true,
};
OutlineInvertedWithDarkTheme.decorators = [themeDecorator(Theme.DARK)];

export const Subtle = Template.bind({});
Subtle.args = {
	variant: ButtonVariant.SUBTLE,
	children: 'click me',
};

export const Filled = Template.bind({});
Filled.args = {
	variant: ButtonVariant.FILLED,
	children: 'click me',
};

export const FilledCompact = Template.bind({});
FilledCompact.args = {
	variant: ButtonVariant.FILLED,
	children: 'click me',
	compact: true,
};

export const FilledUppercase = Template.bind({});
FilledUppercase.args = {
	variant: ButtonVariant.FILLED,
	children: 'click me',
	uppercase: true,
};

export const FilledWithDarkTheme = Template.bind({});
FilledWithDarkTheme.args = {
	variant: ButtonVariant.FILLED,
	children: 'click me',
};
FilledWithDarkTheme.decorators = [themeDecorator(Theme.DARK)];

export const FilledUppercaseCompactInvertedWithDarkTheme = Template.bind({});
FilledUppercaseCompactInvertedWithDarkTheme.args = {
	variant: ButtonVariant.FILLED,
	children: 'click me',
	uppercase: true,
	compact: true,
	inverted: true,
};
FilledUppercaseCompactInvertedWithDarkTheme.decorators = [themeDecorator(Theme.DARK)];
