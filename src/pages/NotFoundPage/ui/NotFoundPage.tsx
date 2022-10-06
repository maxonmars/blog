import module from './NotFoundPage.module.css';
import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';

interface NotFoundPageProps {
	className?: string;
}

export const NotFoundPage = ({className}: NotFoundPageProps) => {
	const {t} = useTranslation();

	return (
		<div className={classNames([module.notFoundPage, className])}>
			{t('Страница не найдена')}
		</div>
	);
};
