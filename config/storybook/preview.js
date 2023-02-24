import {initialize, mswDecorator} from 'msw-storybook-addon';
import {RouterDecorator} from 'shared/lib/storybook/RouterDecorator';
import {StyleDecorator} from 'shared/lib/storybook/StyleDecorator';
import {SuspenseDecorator} from 'shared/lib/storybook/SuspenseDecorator';
import {themeDecorator} from 'shared/lib/storybook/ThemeDecorator';
import {translationDecorator} from 'shared/lib/storybook/TranslationDecorator';
import {Theme} from 'shared/lib/theme';

export const parameters = {
	actions: {argTypesRegex: '^on[A-Z].*'},
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	themes: {
		default: 'light',
		list: [
			{
				name: 'light',
				class: [
					'storybook-addon-themes',
					`storybook-addon-themes-${Theme.LIGHT}`,
				],
				color: '#f4f4fb',
			},
			{
				name: 'dark',
				class: [
					'storybook-addon-themes',
					`storybook-addon-themes-${Theme.DARK}`,
				],
				color: '#5e69ee',
			},
			{
				name: 'bacterium',
				class: [
					'storybook-addon-themes',
					`storybook-addon-themes-${Theme.BACTERIUM}`,
				],
				color: '#ccda57',
			},
		],
	},
};

// Initialize MSW
initialize();

export const decorators = [
	StyleDecorator,
	themeDecorator(Theme.LIGHT),
	RouterDecorator,
	translationDecorator,
	SuspenseDecorator,
	mswDecorator,
];
