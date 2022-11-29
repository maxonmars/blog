import module from './LoginForm.module.css';
import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import {Button, ButtonVariant} from 'shared/ui/Button/Button';
import {Input} from 'shared/ui/Input/Input';
import {loginActions, loginReducer} from '../../model/slice/loginSlice';
import {loginByUsername} from '../../model/services/loginByUsername';
import {useAppDispatch} from 'shared/hooks';
import {Text, TextSize, TextVariant} from 'shared/ui/Text/Text';
import {useSelector} from 'react-redux';
import {selectLoginUsername} from '../../model/selectors/selectLoginUsername/selectLoginUsername';
import {selectLoginPassword} from '../../model/selectors/selectLoginPassword/selectLoginPassword';
import {selectLoginIsLoading} from '../../model/selectors/selectLoginIsLoading/selectLoginIsLoading';
import {selectLoginError} from '../../model/selectors/selectLoginError/selectLoginError';
import type {ReducersList} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {DynamicModuleLoader} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {useCallback} from 'react';

export interface LoginFormProps {
	className?: string;
	onCloseModal: () => void;
}

const initialReducers: ReducersList = {
	login: loginReducer,
};

const LoginForm = ({className, onCloseModal}: LoginFormProps) => {
	const {t} = useTranslation();
	const dispatch = useAppDispatch();
	const username = useSelector(selectLoginUsername);
	const password = useSelector(selectLoginPassword);
	const isLoading = useSelector(selectLoginIsLoading);
	const error = useSelector(selectLoginError);

	const handleUsernameChange = useCallback((username: string) => {
		dispatch(loginActions.setUsername(username));
	}, [dispatch]);

	const handlePasswordChange = useCallback((password: string) => {
		dispatch(loginActions.setPassword(password));
	}, [dispatch]);

	const handleLogin = async () => {
		const result = await dispatch(loginByUsername({username, password}));
		if (result.meta.requestStatus === 'fulfilled') {
			onCloseModal();
		}
	};

	return (
		<DynamicModuleLoader reducers={initialReducers}>
			<div className={classNames([module.loginForm, className])}>
				{error && <Text size={TextSize.SM} variant={TextVariant.RED}>
					{t('неверный пароль или имя пользователя')}
				</Text>}
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
					variant={ButtonVariant.FILLED}>
					{t('Войти')}
				</Button>
			</div>
		</DynamicModuleLoader>
	);
};

export default LoginForm;
