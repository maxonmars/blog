import type {ComponentMeta, ComponentStory} from '@storybook/react';
import {Button, ButtonRadius, ButtonSize, ButtonVariant} from './Button';
import {themDecorator} from 'shared/lib/storybook/ThemDecorator';
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

export const Default = Template.bind({}) as StoryType;
Default.args = {
	variant: ButtonVariant.DEFAULT,
	children: 'click me',
};

export const DefaultSquare = Template.bind({}) as StoryType;
DefaultSquare.args = {
	variant: ButtonVariant.DEFAULT,
	children: '>',
	square: true,
};

export const DefaultSquareLarge = Template.bind({}) as StoryType;
DefaultSquareLarge.args = {
	variant: ButtonVariant.DEFAULT,
	children: '>',
	square: true,
	size: ButtonSize.LG,
};

export const DefaultSquareSmall = Template.bind({}) as StoryType;
DefaultSquareSmall.args = {
	variant: ButtonVariant.DEFAULT,
	children: '>',
	square: true,
	size: ButtonSize.SM,
};

export const Outline = Template.bind({}) as StoryType;
Outline.args = {
	variant: ButtonVariant.OUTLINE,
	children: 'click me',
};

export const OutlineSmall = Template.bind({}) as StoryType;
OutlineSmall.args = {
	variant: ButtonVariant.OUTLINE,
	children: 'click me',
	size: ButtonSize.SM,
};

export const OutlineLarge = Template.bind({}) as StoryType;
OutlineLarge.args = {
	variant: ButtonVariant.OUTLINE,
	children: 'click me',
	size: ButtonSize.LG,
};

export const OutlineRadiusS = Template.bind({}) as StoryType;
OutlineRadiusS.args = {
	variant: ButtonVariant.OUTLINE,
	children: 'click me',
	radius: ButtonRadius.SM,
};

export const OutlineRadiusL = Template.bind({}) as StoryType;
OutlineRadiusL.args = {
	variant: ButtonVariant.OUTLINE,
	children: 'click me',
	radius: ButtonRadius.LG,
};

export const OutlineInvertedRadiusL = Template.bind({}) as StoryType;
OutlineInvertedRadiusL.args = {
	variant: ButtonVariant.OUTLINE,
	children: 'click me',
	radius: ButtonRadius.LG,
	inverted: true,
};

export const OutlineWithDarkTheme = Template.bind({}) as StoryType;
OutlineWithDarkTheme.args = {
	variant: ButtonVariant.OUTLINE,
	children: 'click me',
};
OutlineWithDarkTheme.decorators = [themDecorator(Theme.DARK)];

export const OutlineInvertedWithDarkTheme = Template.bind({}) as StoryType;
OutlineInvertedWithDarkTheme.args = {
	variant: ButtonVariant.OUTLINE,
	children: 'click me',
	inverted: true,
};
OutlineInvertedWithDarkTheme.decorators = [themDecorator(Theme.DARK)];

export const Subtle = Template.bind({}) as StoryType;
Subtle.args = {
	variant: ButtonVariant.SUBTLE,
	children: 'click me',
};

export const Filled = Template.bind({}) as StoryType;
Filled.args = {
	variant: ButtonVariant.FILLED,
	children: 'click me',
};

export const FilledCompact = Template.bind({}) as StoryType;
FilledCompact.args = {
	variant: ButtonVariant.FILLED,
	children: 'click me',
	compact: true,
};

export const FilledUppercase = Template.bind({}) as StoryType;
FilledUppercase.args = {
	variant: ButtonVariant.FILLED,
	children: 'click me',
	uppercase: true,
};

export const FilledWithDarkTheme = Template.bind({}) as StoryType;
FilledWithDarkTheme.args = {
	variant: ButtonVariant.FILLED,
	children: 'click me',
};
FilledWithDarkTheme.decorators = [themDecorator(Theme.DARK)];

export const FilledUppercaseCompactInvertedWithDarkTheme = Template.bind({}) as StoryType;
FilledUppercaseCompactInvertedWithDarkTheme.args = {
	variant: ButtonVariant.FILLED,
	children: 'click me',
	uppercase: true,
	compact: true,
	inverted: true,
};
FilledUppercaseCompactInvertedWithDarkTheme.decorators = [themDecorator(Theme.DARK)];
