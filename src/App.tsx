import './styles/index.scss'
import React, {Suspense} from "react";
import {NavLink, Route, Routes} from "react-router-dom";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {useTheme} from "./theme/useTheme";

export const App = () => {
    const {theme, toggleTheme} = useTheme();
    const activeStyle = ({isActive}: { isActive: boolean }): React.CSSProperties =>
        isActive
            ? {color: 'var(--primary-color)'}
            : {color: 'var(--secondary-color)'};

    return (
        <div className={`app ${theme}`}>
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