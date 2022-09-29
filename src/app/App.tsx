import './styles/index.scss'
import React from "react";
import {classNames} from "shared/lib/classNames/classNames";

import {Navbar} from "widgets/Navbar";
import {AppRouter} from "app/providers/router";
import {useTheme} from "shared/lib/theme";
import {Sidebar} from "widgets/Sidebar";

export const App = () => {
    const {theme} = useTheme();

    return (
        <div className={classNames(['app', 'app-layout', theme])}>
            <Navbar/>
            <Sidebar/>
            <AppRouter/>
        </div>
    );
};