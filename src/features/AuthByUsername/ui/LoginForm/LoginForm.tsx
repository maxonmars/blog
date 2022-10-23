import module from './LoginForm.module.css';
import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import {Button} from 'shared/ui/Button/Button';
import {Input} from 'shared/ui/Input/Input';

interface LoginFormProps {
	className?: string;
}

export const LoginForm = ({className}: LoginFormProps) => {
	const {t} = useTranslation();
	return (
		<div className={classNames([module.loginForm, className])}>
			<Input autoFocus type="text" placeholder={t('введите имя пользователя')}/>
			<Input type="text" placeholder={t('введите пароль')}/>
			<Button>{t('Войти')}</Button>
		</div>
	);
};

