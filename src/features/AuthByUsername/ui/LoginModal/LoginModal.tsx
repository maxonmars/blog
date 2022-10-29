import {Modal} from 'shared/ui/Modal/Modal';
import {LoginFormAsync} from '../LoginForm/LoginForm.async';
import {useTranslation} from 'react-i18next';
import {Suspense} from 'react';
import {Loader} from 'shared/ui/Loader/Loader';

interface LoginModalProps {
	isOpen: boolean;
	onClose: () => void;
}

export const LoginModal = ({isOpen, onClose}: LoginModalProps) => {
	const {t} = useTranslation();
	return (
		<Modal
			isOpened={isOpen}
			onClose={onClose}
			titleOrder={3}
			title={t('Пожалуйста авторизируйтесь')}>
			<Suspense fallback={<Loader/>}>
				<LoginFormAsync/>
			</Suspense>
		</Modal>
	);
};
