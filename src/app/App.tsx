import './styles/index.scss'
import React, {Suspense} from "react";
import {NavLink, useRoutes} from "react-router-dom";
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/theme";
import {routes} from "shared/config/route/routeConfig";

export const App = () => {
    const {theme, toggleTheme} = useTheme();
    const appRoutes = useRoutes(routes);
    const activeStyle = ({isActive}: { isActive: boolean }): React.CSSProperties =>
        isActive
            ? {color: 'var(--secondary-color)'}
            : {color: 'var(--primary-color)'};

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <NavLink style={activeStyle} to='/' end>Главная страница</NavLink>
            <NavLink style={activeStyle} to='/about'>О сайте</NavLink>
            <Suspense fallback={<div>...Loading</div>}>
                {appRoutes}
            </Suspense>
        </div>
    );
};