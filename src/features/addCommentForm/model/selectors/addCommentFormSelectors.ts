import {buildSelector} from '@/shared/lib/store';

export const [useCommentFormText, selectCommentFormText] = buildSelector(
	state => state.addCommentForm?.text ?? '',
);

export const [useCommentFormError, selectCommentFormError] = buildSelector(
	state => state.addCommentForm?.error,
);
