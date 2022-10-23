import type React from 'react';
import {useState} from 'react';
import module from './Navbar.module.css';
import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import {Button, ButtonSize, ButtonVariant} from 'shared/ui/Button/Button';
import {LoginModal} from 'features/AuthByUsername';

const activeStyle = ({isActive}: {isActive: boolean}): React.CSSProperties =>
	isActive
		? {color: 'var(--secondary-color-inverted)'}
		: {color: 'var(--primary-color-inverted)'};

interface NavbarProps {
	className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
	const {t} = useTranslation('translation');
	const [isOpenAuthModal, setIsOpenAuthModal] = useState(false);

	const handleCloseAuthModal = () => {
		setIsOpenAuthModal(false);
	};

	const handleOpenAuthModal = () => {
		setIsOpenAuthModal(true);
	};

	return (
		<div className={classNames([module.navbar, className])}>
			<div className={module.logo}>LOGO</div>
			<div className={module.links}>
				<Button size={ButtonSize.SM} variant={ButtonVariant.FILLED} onClick={handleOpenAuthModal}>
					{t('Войти')}
				</Button>
				<LoginModal onClose={handleCloseAuthModal} isOpen={isOpenAuthModal}/>
			</div>
		</div>
	);
};
