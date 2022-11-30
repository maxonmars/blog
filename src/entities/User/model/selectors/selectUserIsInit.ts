import type {StateScheme} from 'app/providers/StoreProvider/config/StateScheme';

export const selectUserIsInit = (state: StateScheme) => {
	return state.user.isInit;
};
