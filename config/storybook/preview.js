import {addDecorator} from '@storybook/react';
import {StyleDecorator} from 'shared/lib/storybook/StyleDecorator';
import {themDecorator} from 'shared/lib/storybook/ThemDecorator';
import {Theme} from 'shared/lib/theme';
import {RouterDecorator} from 'shared/lib/storybook/RouterDecorator';

export const parameters = {
	actions: {argTypesRegex: '^on[A-Z].*'},
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};

addDecorator(StyleDecorator);
addDecorator(themDecorator(Theme.LIGHT));
addDecorator(RouterDecorator);
