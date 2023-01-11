import type {StateScheme} from '@/app/providers/StoreProvider/config/StateScheme';

export const selectLoginPassword = (state: StateScheme) => state?.login?.password ?? '';
