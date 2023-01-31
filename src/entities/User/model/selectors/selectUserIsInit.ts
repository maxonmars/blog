import type {StateScheme} from '@/app/providers/StoreProvider';

export const selectUserIsInit = (state: StateScheme) => {
	return state.user.isInit;
};
