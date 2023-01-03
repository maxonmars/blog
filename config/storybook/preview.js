import {StyleDecorator} from 'shared/lib/storybook/StyleDecorator';
import {themeDecorator} from 'shared/lib/storybook/ThemeDecorator';
import {Theme} from 'shared/lib/theme';
import {RouterDecorator} from 'shared/lib/storybook/RouterDecorator';
import {translationDecorator} from 'shared/lib/storybook/TranslationDecorator';
import {SuspenseDecorator} from 'shared/lib/storybook/SuspenseDecorator';
import {initialize, mswDecorator} from 'msw-storybook-addon';

export const parameters = {
	actions: {argTypesRegex: '^on[A-Z].*'},
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
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
