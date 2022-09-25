import {FC} from "react";
import module from './AppLink.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {Link, LinkProps} from "react-router-dom";

export enum APP_LINK_THEME {
    MAIN = 'main',
    INVERTED = 'inverted',
}

interface AppLinkProps extends LinkProps {
    className?: string
    theme?: APP_LINK_THEME
}

export const AppLink: FC<AppLinkProps> = (
    {className, theme = APP_LINK_THEME.MAIN, children, ...restProp}) => {

    return (
        <Link
            {...restProp}
            className={classNames([module.appLink, className, module[theme]])}>
            {children}
        </Link>
    );
};