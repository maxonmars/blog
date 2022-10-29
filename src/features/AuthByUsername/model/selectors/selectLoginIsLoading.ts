import type {StateScheme} from 'app/providers/StoreProvider/config/StateScheme';

export const selectLoginIsLoading = (state: StateScheme) => state?.login?.isLoading || false;
