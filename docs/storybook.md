## Storybook

Пример:

```typescript jsx
import type {ComponentMeta, ComponentStory} from '@storybook/react';
import {Button, ButtonRadius, ButtonSize, ButtonVariant} from './Button';
import {themeDecorator} from '@/shared/lib/storybook/ThemeDecorator';
import {Theme} from '@/shared/lib/theme';

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
		<Button {...args} />
	</div>
);

export const Default = Template.bind({});
Default.args = {
	variant: ButtonVariant.DEFAULT,
	children: 'click me',
};
```
