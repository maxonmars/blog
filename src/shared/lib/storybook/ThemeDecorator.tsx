import type {Story} from '@storybook/react';
import type {Theme} from '../theme';
import {ThemeProvider} from '@/app/providers/theme';

export const themeDecorator = (theme: Theme) => Object.assign((Story: Story) => {
	return (
		<ThemeProvider initialTheme={theme}>
			<div className="app">
				<Story/>
			</div>
		</ThemeProvider>
	);
}, {displayName: 'ThemeDecorator'});
