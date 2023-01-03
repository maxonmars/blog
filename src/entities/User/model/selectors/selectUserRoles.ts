import type {StateScheme} from 'app/providers/StoreProvider/config/StateScheme';
import {createSelector} from '@reduxjs/toolkit';
import {UserRoles} from '../consts/user';

export const selectUserRoles = (state: StateScheme) => {
	return state.user.authData?.roles;
};

export const selectUserIsAdmin = createSelector(
	selectUserRoles,
	roles => Boolean(roles?.includes(UserRoles.ADMIN)),
);

export const selectUserIsManager = createSelector(
	selectUserRoles,
	roles => Boolean(roles?.includes(UserRoles.MANAGER)),
);
