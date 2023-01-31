import type {StateScheme} from '@/app/providers/StoreProvider';

export const selectLoginError = (state: StateScheme) => state?.login?.error;
