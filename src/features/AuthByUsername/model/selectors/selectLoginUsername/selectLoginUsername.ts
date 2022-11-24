import type {StateScheme} from 'app/providers/StoreProvider/config/StateScheme';

export const selectLoginUsername = (state: StateScheme) => state?.login?.username ?? '';
