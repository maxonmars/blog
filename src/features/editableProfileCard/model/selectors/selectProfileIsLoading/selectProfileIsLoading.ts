import type {StateScheme} from '@/app/providers/StoreProvider';

export const selectProfileIsLoading = (state: StateScheme) => state.profile?.isLoading;
