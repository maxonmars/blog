import {Modal} from 'shared/ui/Modal/Modal';
import {LoginForm} from '../LoginForm/LoginForm';
import {useTranslation} from 'react-i18next';

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
			<LoginForm/>
		</Modal>
	);
};
