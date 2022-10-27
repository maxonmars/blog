import type {Story} from '@storybook/react';
import {I18nextProvider} from 'react-i18next';
import {PageLoader} from 'widgets/PageLoader';
import React, {Suspense} from 'react';
import i18n from 'shared/config/i18n/i18n';

export const translationDecorator = (Story: Story) => {
	return (
		<I18nextProvider i18n={i18n}>
			<Suspense fallback={<PageLoader className="app-suspense-loader"/>}>
				<Story/>
			</Suspense>
		</I18nextProvider>
	);
};
