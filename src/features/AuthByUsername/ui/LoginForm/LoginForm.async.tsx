import type {FC} from 'react';
import {lazy} from 'react';
import type {LoginFormProps} from 'features/AuthByUsername/ui/LoginForm/LoginForm';

export const LoginFormAsync = lazy<FC<LoginFormProps>>(async () => new Promise(resolve => {
	setTimeout(() => {
		resolve(import('./LoginForm'));
	}, 1500);
}));
