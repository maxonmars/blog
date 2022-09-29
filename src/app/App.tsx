import './styles/index.scss'
import React from "react";
import {classNames} from "shared/lib/classNames/classNames";

import {Navbar} from "widgets/Navbar";
import {AppRouter} from "app/providers/router";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {useTheme} from "shared/lib/theme";

export const App = () => {
    const {theme} = useTheme();

    return (
        <div className={classNames(['app', theme])}>
            <Navbar/>
            <AppRouter/>
            <ThemeSwitcher/>
        </div>
    );
};