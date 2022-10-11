import type {FC} from 'react';
import module from './AppLink.module.css';
import {classNames} from 'shared/lib/classNames/classNames';
import type {LinkProps} from 'react-router-dom';
import {Link} from 'react-router-dom';

export enum AppLinkVariant {
	MAIN = 'main',
	INVERTED = 'inverted',
}

interface AppLinkProps extends LinkProps {
	className?: string;
	variant?: AppLinkVariant;
}

export const AppLink: FC<AppLinkProps> = (
	{className, variant = AppLinkVariant.MAIN, children, ...restProp}) => (
	<Link
		{...restProp}
		className={classNames([module.appLink, className, module[variant]])}>
		{children}
	</Link>
);
