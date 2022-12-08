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
import { createSlice } from '@reduxjs/toolkit';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { Country } from 'entities/Country/model/types/country';
import { Currency } from 'entities/Currency/model/types/currency';
var initialState = {
    isLoading: false,
    readonlyProfileData: {
        age: 0,
        firstName: '',
        lastName: '',
        country: Country.Russia,
        currency: Currency.RUB,
        avatar: '',
        city: '',
        username: '',
    },
    error: undefined,
    isReadonly: true,
    editableProfileData: undefined,
    validateErrors: undefined,
};
var profileSlice = createSlice({
    name: 'profile',
    initialState: initialState,
    reducers: {
        editableProfileForm: function (state) {
            state.isReadonly = false;
        },
        editProfile: function (state, action) {
            state.editableProfileData = __assign(__assign({}, state.editableProfileData), action.payload);
        },
        cancelEditProfile: function (state) {
            state.editableProfileData = state.readonlyProfileData;
            state.isReadonly = true;
            state.validateErrors = undefined;
        },
    },
    extraReducers: function (builder) {
        builder
            .addCase(fetchProfileData.pending, function (state) {
            state.error = undefined;
            state.isLoading = true;
        })
            .addCase(fetchProfileData.fulfilled, function (state, action) {
            state.isLoading = false;
            state.readonlyProfileData = action.payload;
            state.editableProfileData = action.payload;
        })
            .addCase(fetchProfileData.rejected, function (state, action) {
            state.isLoading = false;
            state.error = action.payload;
        })
            .addCase(updateProfileData.pending, function (state) {
            state.validateErrors = undefined;
            state.isLoading = true;
        })
            .addCase(updateProfileData.fulfilled, function (state, action) {
            state.isLoading = false;
            state.readonlyProfileData = action.payload;
            state.editableProfileData = action.payload;
            state.isReadonly = true;
            state.validateErrors = undefined;
        })
            .addCase(updateProfileData.rejected, function (state, action) {
            state.isLoading = false;
            state.validateErrors = action.payload;
        });
    },
});
export var profileActions = profileSlice.actions, profileReducer = profileSlice.reducer;
//# sourceMappingURL=profileSlice.js.map