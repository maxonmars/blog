import './styles/index.scss'
import React from "react";
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/theme";
import {Navbar} from "widgets/Navbar";
import {AppRouter} from "app/providers/router";

export const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames(['app', theme])}>
            <Navbar/>
            <AppRouter/>
            <button onClick={toggleTheme}>TOGGLE</button>
        </div>
    );
};