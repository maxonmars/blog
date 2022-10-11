import {classNames} from 'shared/lib/classNames/classNames';
import {Button, ButtonVariant} from 'shared/ui/Button/Button';
import {useTranslation} from 'react-i18next';

interface LangSwitcherProps {
	className?: string;
}

export const LangSwitcher = ({className}: LangSwitcherProps) => {
	const {t, i18n} = useTranslation('translation');

	const onToggle = () => {
		void i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
	};

	return (
		<Button
			onClick={onToggle}
			variant={ButtonVariant.SUBTLE}
			className={classNames([className])}
		>
			{t('Язык')}
		</Button>
	);
};
