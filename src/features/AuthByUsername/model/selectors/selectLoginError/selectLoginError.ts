import type {StateScheme} from '@/app/providers/StoreProvider/config/StateScheme';

export const selectLoginError = (state: StateScheme) => state?.login?.error;
