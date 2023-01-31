import type {StateScheme} from '@/app/providers/StoreProvider';

export const selectLoginIsLoading = (state: StateScheme) =>
	state?.login?.isLoading ?? false;
