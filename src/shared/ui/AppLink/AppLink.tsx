import type {ReactNode} from 'react';
import {forwardRef} from 'react';
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
	children?: ReactNode;
}

export const AppLink = forwardRef<HTMLAnchorElement, AppLinkProps>((
	{className, variant = AppLinkVariant.MAIN, children, ...restProp}, ref) => (
	<Link
		ref={ref}
		{...restProp}
		onKeyUp={() => {
			console.log('KEY');
		}}
		className={classNames([module.appLink, className, module[variant]])}>
		{children}
	</Link>
));

AppLink.displayName = 'AppLink';
