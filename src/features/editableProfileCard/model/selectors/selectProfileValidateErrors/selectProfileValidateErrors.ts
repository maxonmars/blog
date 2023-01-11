import type {StateScheme} from '@/app/providers/StoreProvider';

export const selectProfileValidateErrors = (state: StateScheme) => state.profile?.validateErrors;
