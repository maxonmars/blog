import type {Profile} from '@/entities/Profile';
import type {ValidateProfileError} from '../consts/validateProfileError';

export interface EditableProfileCardSchema {
	readonlyProfileData?: Profile;
	isLoading: boolean;
	error?: string;
	isReadonly: boolean;
	editableProfileData?: Profile;
	validateErrors?: ValidateProfileError[];
}
