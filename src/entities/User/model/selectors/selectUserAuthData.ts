import type {StateScheme} from 'app/providers/StoreProvider/config/StateScheme';

export const selectUserAuthData = (state: StateScheme) => {
	return state.user.authData;
};
