import type {StateScheme} from '@/app/providers/StoreProvider';

export const selectEditableProfileData = (state: StateScheme) => state.profile?.editableProfileData;
