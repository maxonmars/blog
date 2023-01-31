import type {StateScheme} from '@/app/providers/StoreProvider';

export const selectLoginPassword = (state: StateScheme) =>
	state?.login?.password ?? '';
