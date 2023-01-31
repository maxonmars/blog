import type {StateScheme} from '@/app/providers/StoreProvider';

export const selectCommentFormText = (state: StateScheme) => {
	return state.addCommentForm?.text ?? '';
};

export const selectCommentFormError = (state: StateScheme) => {
	return state.addCommentForm?.error;
};
