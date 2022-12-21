import type {FC} from 'react';
import {lazy} from 'react';
import type {AddCommentFormProps} from 'features/addCommentForm/ui/AddCommentForm/AddCommentForm';

export const AddCommentFormAsync = lazy<FC<AddCommentFormProps>>(async () => new Promise(resolve => {
	setTimeout(() => {
		resolve(import('./AddCommentForm'));
	}, 1500);
}));