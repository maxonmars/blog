import module from './PageError.module.css';
import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import {Button} from 'shared/ui/Button/Button';

interface PageErrorProps {
	className?: string;
}

export const PageError = ({className}: PageErrorProps) => {
	const {t} = useTranslation();

	const onReloadPage = () => {
		location.reload();
	};

	return (
		<div className={classNames([module.pageError, className])}>
			<p>{t('Произошла непредвиденная ошибка')}</p>
			<Button onClick={onReloadPage}>{t('Обновить страницу')}</Button>
		</div>
	);
};
