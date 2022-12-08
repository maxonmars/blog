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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import module from './ProfileCard.module.css';
import { classNames } from 'shared/lib/classNames/classNames';
import { useDispatch, useSelector } from 'react-redux';
import { selectEditableProfileData, selectProfileError, selectProfileIsLoading, selectProfileValidateErrors, } from '../../model/selectors';
import { useTranslation } from 'react-i18next';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Title } from 'shared/ui/Title/Title';
import { Loader } from 'shared/ui/Loader/Loader';
import { Text, TextSize, TextVariant } from 'shared/ui/Text/Text';
import { selectProfileIsReadonly } from '../../model/selectors/selectProfileIsReadonly/selectProfileIsReadonly';
import { profileActions } from '../../model/slice/profileSlice';
import { useCallback } from 'react';
import { ProfileField } from '../../model/types/profile';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { useAppDispatch } from 'shared/hooks';
import { Avatar, AvatarSize } from 'shared/ui/Avatar/Avatar';
import { CurrencySelect } from 'entities/Currency';
import { CountrySelect } from 'entities/Country';
import { selectUserAuthData } from 'entities/User';
export var ProfileCard = function (_a) {
    var className = _a.className;
    var t = useTranslation('profile').t;
    var dispatch = useDispatch();
    var appDispatch = useAppDispatch();
    var profileData = useSelector(selectEditableProfileData);
    var authData = useSelector(selectUserAuthData);
    var isLoading = useSelector(selectProfileIsLoading);
    var error = useSelector(selectProfileError);
    var isReadonly = useSelector(selectProfileIsReadonly);
    var isEdit = (authData === null || authData === void 0 ? void 0 : authData.id) === (profileData === null || profileData === void 0 ? void 0 : profileData.id);
    var validateErrors = useSelector(selectProfileValidateErrors);
    var handleProfileEditable = useCallback(function () {
        dispatch(profileActions.editableProfileForm());
    }, [dispatch]);
    var handleProfileDataEditCancel = useCallback(function () {
        dispatch(profileActions.cancelEditProfile());
    }, [dispatch]);
    var handleProfileDataEdit = useCallback(function (value, name) {
        var _a;
        dispatch(profileActions.editProfile((_a = {}, _a[name] = value, _a)));
    }, [dispatch]);
    var handleProfileSubmit = useCallback(function () {
        void appDispatch(updateProfileData(profileData === null || profileData === void 0 ? void 0 : profileData.id));
    }, [appDispatch, profileData === null || profileData === void 0 ? void 0 : profileData.id]);
    if (isLoading) {
        return (_jsx("div", __assign({ className: classNames([module.profileCard, className]) }, { children: _jsx(Loader, {}) })));
    }
    if (error) {
        return (_jsxs("div", __assign({ className: classNames([module.profileCard, className]) }, { children: [_jsx(Title, __assign({ order: 3 }, { children: t('Произошла ошибка') })), _jsx(Text, __assign({ variant: TextVariant.RED }, { children: t('Попробуйте обновить страницу') }))] })));
    }
    return (_jsxs("div", __assign({ className: classNames([module.profileCard, className]) }, { children: [_jsxs("div", __assign({ className: module.header }, { children: [_jsx(Title, { children: t('Профиль') }), isEdit
                        && (isReadonly
                            ? (_jsx(Button, __assign({ variant: ButtonVariant.OUTLINE, onClick: handleProfileEditable }, { children: t('редактировать') })))
                            : (_jsxs(_Fragment, { children: [_jsx(Button, __assign({ variant: ButtonVariant.OUTLINE, onClick: handleProfileDataEditCancel }, { children: t('отменить') })), _jsx(Button, __assign({ variant: ButtonVariant.FILLED, onClick: handleProfileSubmit }, { children: t('сохранить') }))] })))] })), _jsx("div", { children: (validateErrors === null || validateErrors === void 0 ? void 0 : validateErrors.length)
                    && validateErrors.map(function (error) {
                        return (_jsx(Text, __assign({ variant: TextVariant.RED, size: TextSize.SM }, { children: error }), error));
                    }) }), _jsxs("div", __assign({ className: module.content }, { children: [_jsx(Avatar, { src: profileData === null || profileData === void 0 ? void 0 : profileData.avatar, size: AvatarSize.MD }), _jsx(Input, { label: t('Имя'), value: profileData === null || profileData === void 0 ? void 0 : profileData.firstName, readOnly: isReadonly, name: ProfileField.FIRST_NAME, onChange: handleProfileDataEdit }), _jsx(Input, { label: t('Фамилия'), value: profileData === null || profileData === void 0 ? void 0 : profileData.lastName, readOnly: isReadonly, name: ProfileField.LAST_NAME, onChange: handleProfileDataEdit }), _jsx(Input, { label: t('Возраст'), value: profileData === null || profileData === void 0 ? void 0 : profileData.age, readOnly: isReadonly, name: ProfileField.AGE, onChange: handleProfileDataEdit }), _jsx(Input, { label: t('Город'), value: profileData === null || profileData === void 0 ? void 0 : profileData.city, readOnly: isReadonly, name: ProfileField.CITY, onChange: handleProfileDataEdit }), _jsx(Input, { value: profileData === null || profileData === void 0 ? void 0 : profileData.username, readOnly: isReadonly, name: ProfileField.USERNAME, onChange: handleProfileDataEdit, label: t('Юзернейм') }), _jsx(Input, { value: profileData === null || profileData === void 0 ? void 0 : profileData.avatar, readOnly: isReadonly, name: ProfileField.AVATAR, onChange: handleProfileDataEdit, label: t('Фото') }), _jsx(CurrencySelect, { selectedValue: profileData === null || profileData === void 0 ? void 0 : profileData.currency, disabled: isReadonly, onChange: handleProfileDataEdit }), _jsx(CountrySelect, { onChange: handleProfileDataEdit, selectedValue: profileData === null || profileData === void 0 ? void 0 : profileData.country, disabled: isReadonly })] }))] })));
};
//# sourceMappingURL=ProfileCard.js.map