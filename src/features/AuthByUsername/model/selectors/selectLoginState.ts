import type {StateScheme} from 'app/providers/StoreProvider/config/StateScheme';

export const selectLoginState = (state: StateScheme) => state.login;
