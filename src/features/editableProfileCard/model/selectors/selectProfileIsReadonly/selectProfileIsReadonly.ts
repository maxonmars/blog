import type {StateScheme} from '@/app/providers/StoreProvider';

export const selectProfileIsReadonly = (state: StateScheme) => state.profile?.isReadonly;
