import type {FC} from 'react';
import module from './AppLink.module.scss';
import {classNames} from 'shared/lib/classNames/classNames';
import type {LinkProps} from 'react-router-dom';
import {Link} from 'react-router-dom';

export enum AppLinkTheme {
	MAIN = 'main',
	INVERTED = 'inverted',
}

interface AppLinkProps extends LinkProps {
	className?: string;
	theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (
	{className, theme = AppLinkTheme.MAIN, children, ...restProp}) => (
	<Link
		{...restProp}
		className={classNames([module.appLink, className, module[theme]])}>
		{children}
	</Link>
);
