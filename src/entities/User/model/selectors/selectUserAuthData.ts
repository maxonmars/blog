import type {StateScheme} from '@/app/providers/StoreProvider';

export const selectUserAuthData = (state: StateScheme) => {
	return state.user.authData;
};
