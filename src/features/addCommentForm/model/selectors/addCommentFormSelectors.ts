import type {StateScheme} from 'app/providers/StoreProvider/config/StateScheme';

export const selectCommentFormText = (state: StateScheme) => {
	return state.addCommentForm?.text ?? '';
};

export const selectCommentFormError = (state: StateScheme) => {
	return state.addCommentForm?.error;
};
