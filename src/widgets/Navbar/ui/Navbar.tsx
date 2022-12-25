import type React from 'react';
import {useState} from 'react';
import module from './Navbar.module.css';
import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import {Button, ButtonSize, ButtonVariant} from 'shared/ui/Button/Button';
import {LoginModal} from 'features/AuthByUsername';
import {useDispatch, useSelector} from 'react-redux';
import {selectUserAuthData, userActions} from 'entities/User';
import {AppLink, AppLinkVariant} from 'shared/ui/AppLink/AppLink';
import {ROUTE_PATH} from 'app/providers/router';
import type {DropdownItem} from 'shared/ui/Dropdown/Dropdown';
import {Dropdown} from 'shared/ui/Dropdown/Dropdown';
import {Avatar} from 'shared/ui/Avatar/Avatar';

const activeStyle = ({isActive}: {isActive: boolean}): React.CSSProperties =>
	isActive
		? {color: 'var(--secondary-color-inverted)'}
		: {color: 'var(--primary-color-inverted)'};

interface NavbarProps {
	className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
	const {t} = useTranslation('translation');
	const dispatch = useDispatch();
	const authData = useSelector(selectUserAuthData);
	const [isOpenAuthModal, setIsOpenAuthModal] = useState(false);

	const handleCloseAuthModal = () => {
		setIsOpenAuthModal(false);
	};

	const handleOpenAuthModal = () => {
		setIsOpenAuthModal(true);
	};

	const handleLogout = () => {
		dispatch(userActions.logout());
	};

	const isAuth = Boolean(authData);

	const dropdownItems: DropdownItem[] = [
		{content: t('Выйти'), onClick: handleLogout},
		{content: t('Профиль'), href: `${ROUTE_PATH.PROFILE}${authData?.id ?? ''}`},
	];

	return (
		<div className={classNames([module.navbar, className])}>
			<div className={module.logo}>LOGO</div>
			<div className={module.links}>
				{isAuth
					? (
						<>
							<AppLink variant={AppLinkVariant.INVERTED} to={ROUTE_PATH.ARTICLE_CREATE}>
								{t('Создать статью')}
							</AppLink>
							<Dropdown
								placement="bottom-start"
								items={dropdownItems}
								trigger={<Avatar src={authData?.avatar}/>}/>
						</>
					)
					: (
						<Button size={ButtonSize.SM} variant={ButtonVariant.FILLED} onClick={handleOpenAuthModal}>
							{t('Войти')}
						</Button>
					)
				}
				<LoginModal onClose={handleCloseAuthModal} isOpen={isOpenAuthModal}/>
			</div>
		</div>
	);
};
