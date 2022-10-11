import type {Story} from '@storybook/react';
import type {Theme} from 'shared/lib/theme';

export const themDecorator = (theme: Theme) => Object.assign((Story: Story) => (
	<div className={`app ${theme}`}>
		<Story/>
	</div>
), {displayName: 'ThemeDecorator'});
