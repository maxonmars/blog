import type {PayloadAction} from '@reduxjs/toolkit';
import type {AddCommentFormScheme} from '../types/addCommentForm';
import {buildSlice} from '@/shared/lib/store';

const initialState: AddCommentFormScheme = {
	text: '',
};

const addCommentFormSlice = buildSlice({
	name: 'addCommentForm',
	initialState,
	reducers: {
		setText(state, action: PayloadAction<string>) {
			state.text = action.payload;
		},
		getDay(state, action: PayloadAction<string>) {
			state.text = action.payload;
		},
	},
});

export const {
	actions: addCommentFormActions,
	reducer: addCommentFormReducer,
	useActions: useCommentAction,
} = addCommentFormSlice;
