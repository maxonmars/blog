import type {StateScheme} from 'app/providers/StoreProvider';

export const selectProfileData = (state: StateScheme) => state.profile?.data;
