import {Title} from '@/shared/ui/Title';
import {useTranslation} from 'react-i18next';

export const ForbiddenPage = () => {
	const {t} = useTranslation();

	return (
		<Title>{t('Нет доступа')}</Title>
	);
};
