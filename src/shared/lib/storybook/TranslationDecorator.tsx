import i18n from '@/shared/config/i18n/i18n';
// eslint-disable-next-line fsd-strict/layer-imports
import {PageLoader} from '@/widgets/PageLoader';
import type {Story} from '@storybook/react';
import {Suspense} from 'react';
import {I18nextProvider} from 'react-i18next';

export const translationDecorator = (Story: Story) => {
	return (
		<I18nextProvider i18n={i18n}>
			<Suspense fallback={<PageLoader className="app-suspense-loader"/>}>
				<Story/>
			</Suspense>
		</I18nextProvider>
	);
};
