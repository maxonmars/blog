var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import module from './ProfilePage.module.css';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { fetchProfileData, ProfileCard, profileReducer } from 'entities/Profile';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/hooks';
import { useInitialEffect } from 'shared/hooks/useInitialEffect/useInitialEffect';
import { useParams } from 'react-router-dom';
var reducers = {
    profile: profileReducer,
};
var ProfilePage = function () {
    var t = useTranslation().t;
    var dispatch = useAppDispatch();
    var id = useParams().id;
    useInitialEffect(useCallback(function () {
        void dispatch(fetchProfileData(id));
    }, [dispatch, id]));
    return (_jsx(DynamicModuleLoader, __assign({ reducers: reducers, isRemoveAfterUnmount: true }, { children: _jsx("div", __assign({ className: classNames([module.profilePage]) }, { children: _jsx(ProfileCard, {}) })) })));
};
export default ProfilePage;
//# sourceMappingURL=ProfilePage.js.map