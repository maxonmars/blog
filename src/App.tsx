import './index.scss'
import {Suspense} from "react";
import {NavLink, Route, Routes} from "react-router-dom";
import AboutPage from "./pages/AboutPage/AboutPage";
import MainPage from "./pages/MainPage/MainPage";
import React from "react";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";

export const App = () => {
    const activeStyle = ({isActive}: { isActive: boolean }): React.CSSProperties => isActive ? {color: 'red'} : {color: 'green'}
    return (
        <div className="app">
            <NavLink style={activeStyle} to='/about'>О сайте</NavLink>
            <NavLink style={activeStyle} to='/'>Главная страница</NavLink>
            <Suspense fallback={<div>...Loading</div>}>
                <Routes>
                    <Route path='/about' element={<AboutPageAsync/>}/>
                    <Route path='/' element={<MainPageAsync/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};