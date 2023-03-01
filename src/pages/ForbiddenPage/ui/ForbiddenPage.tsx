import {Title} from '@/shared/ui/Title';
import {useTranslation} from 'react-i18next';

export const ForbiddenPage = () => {
	const {t} = useTranslation();

	return (
		<div data-testid="ForbiddenPage">
			<Title>{t('Нет доступа')}</Title>
		</div>
	);
};
