import module from './LoginForm.module.css';
import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import {Button, ButtonVariant} from 'shared/ui/Button/Button';
import {Input} from 'shared/ui/Input/Input';
import {loginActions, loginReducer} from '../../model/slice/LoginSlice';
import {loginByUsername} from '../../model/services/loginByUsername';
import {useAppDispatch} from 'shared/hooks';
import {Text, TextSize, TextVariant} from 'shared/ui/Text/Text';
import {useSelector} from 'react-redux';
import {selectLoginUsername} from '../../model/selectors/selectLoginUsername';
import {selectLoginPassword} from '../../model/selectors/selectLoginPassword';
import {selectLoginIsLoading} from '../../model/selectors/selectLoginIsLoading';
import {selectLoginError} from '../../model/selectors/selectLoginError';
import type {ReducersList} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {DynamicModuleLoader} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

export interface LoginFormProps {
	className?: string;
}

const initialReducers: ReducersList = {
	login: loginReducer,
};

const LoginForm = ({className}: LoginFormProps) => {
	const {t} = useTranslation();
	const dispatch = useAppDispatch();
	const username = useSelector(selectLoginUsername);
	const password = useSelector(selectLoginPassword);
	const isLoading = useSelector(selectLoginIsLoading);
	const error = useSelector(selectLoginError);

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
		<DynamicModuleLoader reducers={initialReducers}>
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
		</DynamicModuleLoader>
	);
};

export default LoginForm;