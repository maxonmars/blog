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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import module from './AddCommentForm.module.css';
import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input/Input';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { selectCommentFormError, selectCommentFormText, } from 'features/addCommentForm/model/selectors/addCommentFormSelectors';
import { useCallback } from 'react';
import { addCommentFormActions, addCommentFormReducer } from 'features/addCommentForm/model/slice/addCommentFormSlice';
import { useAppDispatch } from 'shared/hooks';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
var reducers = {
    addCommentForm: addCommentFormReducer,
};
var AddCommentForm = function (_a) {
    var className = _a.className, onCommentSend = _a.onCommentSend;
    var t = useTranslation().t;
    var text = useSelector(selectCommentFormText);
    var error = useSelector(selectCommentFormError);
    var dispatch = useAppDispatch();
    var handleCommentChange = useCallback(function (value) {
        dispatch(addCommentFormActions.setText(value));
    }, [dispatch]);
    var handleCommentSend = function () {
        onCommentSend(text !== null && text !== void 0 ? text : '');
        dispatch(addCommentFormActions.setText(''));
    };
    return (_jsx(DynamicModuleLoader, __assign({ reducers: reducers, isRemoveAfterUnmount: true }, { children: _jsxs("div", __assign({ className: classNames([module.addCommentForm, className]) }, { children: [_jsx(Input, { onChange: handleCommentChange, value: text, placeholder: t('комментарий') }), _jsx(Button, __assign({ onClick: handleCommentSend }, { children: t('Отправить') }))] })) })));
};
export default AddCommentForm;
//# sourceMappingURL=AddCommentForm.js.map