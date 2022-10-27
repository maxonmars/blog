import module from './LoginForm.module.css';
import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import {Button, ButtonVariant} from 'shared/ui/Button/Button';
import {Input} from 'shared/ui/Input/Input';
import {loginActions} from '../../model/slice/LoginSlice';
import {selectLoginState} from '../../model/selectors/selectLoginState';
import {loginByUsername} from '../../model/services/loginByUsername';
import {useAppDispatch, useAppSelector} from 'shared/hooks';
import {Text, TextSize, TextVariant} from 'shared/ui/Text/Text';

interface LoginFormProps {
	className?: string;
}

export const LoginForm = ({className}: LoginFormProps) => {
	const {t} = useTranslation();
	const dispatch = useAppDispatch();
	const {username, password, isLoading, error} = useAppSelector(selectLoginState);

	const handleUsernameChange = (username: string) => {
		dispatch(loginActions.setUsername(username));
	};

	const handlePasswordChange = (password: string) => {
		dispatch(loginActions.setPassword(password));
	};

	const handleLogin = () => {
		void dispatch(loginByUsername({username, password}));
	};

	return (
		<div className={classNames([module.loginForm, className])}>
			{error && <Text size={TextSize.SM} variant={TextVariant.RED}>{error}</Text>}
			<Input
				onChange={handleUsernameChange}
				autoFocus
				type="text"
				value={username}
				placeholder={t('введите имя пользователя')}/>
			<Input
				onChange={handlePasswordChange}
				type="text"
				value={password}
				placeholder={t('введите пароль')}/>
			<Button
				disabled={isLoading}
				onClick={handleLogin}
				variant={ButtonVariant.OUTLINE}>
				{t('Войти')}
			</Button>
		</div>
	);
};
