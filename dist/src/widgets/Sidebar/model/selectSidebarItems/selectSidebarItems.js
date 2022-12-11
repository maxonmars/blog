var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { createSelector } from '@reduxjs/toolkit';
import { selectUserAuthData } from 'entities/User';
import { ROUTE_PATH } from 'app/providers/router';
import { IcoThinAlien, IcoThinFileContract, IcoThinHouse, IcoThinSquareList } from 'shared/assets/icons';
export var selectSidebarItems = createSelector(selectUserAuthData, function (userData) {
    var sidebarItems = [
        {
            path: ROUTE_PATH.MAIN,
            Icon: IcoThinHouse,
            text: 'Главная',
        },
        {
            path: ROUTE_PATH.ABOUT,
            Icon: IcoThinSquareList,
            text: 'О сайте',
        },
    ];
    var authUserSidebarItems = userData
        ? [
            {
                path: "".concat(ROUTE_PATH.PROFILE).concat(userData.id),
                Icon: IcoThinAlien,
                text: 'Профиль',
            },
            {
                path: ROUTE_PATH.ARTICLES,
                Icon: IcoThinFileContract,
                text: 'Статьи',
            },
        ]
        : [];
    return __spreadArray(__spreadArray([], sidebarItems, true), authUserSidebarItems, true);
});
//# sourceMappingURL=selectSidebarItems.js.map