import type {StateScheme} from '@/app/providers/StoreProvider';

export const selectLoginUsername = (state: StateScheme) =>
	state?.login?.username ?? '';
