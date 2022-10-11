import type React from 'react';
import module from './Navbar.module.css';
import {classNames} from 'shared/lib/classNames/classNames';
import {AppLinkVariant, AppLink} from 'shared/ui/AppLink/AppLink';
import {useTranslation} from 'react-i18next';

const activeStyle = ({isActive}: {isActive: boolean}): React.CSSProperties =>
	isActive
		? {color: 'var(--secondary-color-inverted)'}
		: {color: 'var(--primary-color-inverted)'};

interface NavbarProps {
	className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
	const {t} = useTranslation('translation');

	return (
		<div className={classNames([module.navbar, className])}>
			<div className={module.logo}>LOGO</div>
			<div className={module.links}>
				<AppLink to="/" variant={AppLinkVariant.INVERTED}>{t('Главная страница')}</AppLink>
				<AppLink to="/about" variant={AppLinkVariant.INVERTED}>{t('О сайте')}</AppLink>
			</div>
		</div>
	);
};
