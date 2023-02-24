import {selectUserAuthData} from '@/entities/User';
import {LoginModal} from '@/features/AuthByUsername';
import {AvatarDropdown} from '@/features/avatarDropdown';
import {NotificationsButton} from '@/features/notificationsButton';
import {getRouteArticleCreate} from '@/shared/const/router';
import {classNames} from '@/shared/lib/classNames/classNames';
import {AppLink, AppLinkVariant} from '@/shared/ui/AppLink';
import {Button, ButtonSize, ButtonVariant} from '@/shared/ui/Button';
import type React from 'react';
import {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';
import module from './Navbar.module.css';

const activeStyle = ({isActive}: {isActive: boolean}): React.CSSProperties =>
	isActive
		? {color: 'var(--secondary-color-inverted)'}
		: {color: 'var(--primary-color-inverted)'};

interface NavbarProps {
	className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
	const {t} = useTranslation('translation');
	const authData = useSelector(selectUserAuthData);
	const [isOpenAuthModal, setIsOpenAuthModal] = useState(false);

	const handleCloseAuthModal = () => {
		setIsOpenAuthModal(false);
	};

	const handleOpenAuthModal = () => {
		setIsOpenAuthModal(true);
	};

	const isAuth = Boolean(authData);

	return (
		<div className={classNames([module.navbar, className])}>
			<div className={module.logo}>LOGO</div>
			<div className={module.links}>
				{isAuth
					? (
						<>
							<AppLink
								variant={AppLinkVariant.INVERTED}
								to={getRouteArticleCreate()}>
								{t('Создать статью')}
							</AppLink>
							<NotificationsButton/>
							<AvatarDropdown/>
						</>
					)
					: (
						<Button
							size={ButtonSize.SM}
							variant={ButtonVariant.FILLED}
							onClick={handleOpenAuthModal}>
							{t('Войти')}
						</Button>
					)
				}
				<LoginModal onClose={handleCloseAuthModal} isOpen={isOpenAuthModal}/>
			</div>
		</div>
	);
};
