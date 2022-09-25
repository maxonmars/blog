import {RouteObject} from "react-router-dom";
import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";
import React from "react";

const ROUTE_PATH = {
    MAIN: '/',
    ABOUT: '/about',
} as const

type PathKey = keyof typeof ROUTE_PATH

type ValueOf<T> = T[keyof T];

interface PathValue extends RouteObject{
    path: ValueOf<typeof ROUTE_PATH>
}

const routeConfig: Record<PathKey, PathValue> = {
    MAIN: {
        path: ROUTE_PATH.MAIN,
        element: <MainPage/>,
    },
    ABOUT: {
        path: ROUTE_PATH.ABOUT,
        element: <AboutPage/>,
    }
}

export const routes = Object.values(routeConfig);