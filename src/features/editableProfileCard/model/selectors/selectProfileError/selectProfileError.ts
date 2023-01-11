import type {StateScheme} from '@/app/providers/StoreProvider';

export const selectProfileError = (state: StateScheme) => state.profile?.error;
