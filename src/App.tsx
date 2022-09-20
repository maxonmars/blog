import './styles/index.scss'
import React, {Suspense} from "react";
import {NavLink, Route, Routes} from "react-router-dom";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";

export const App = () => {
    const {theme, toggleTheme} = useTheme();
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
                <Routes>
                    <Route path='/' element={<MainPageAsync/>}/>
                    <Route path='/about' element={<AboutPageAsync/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};