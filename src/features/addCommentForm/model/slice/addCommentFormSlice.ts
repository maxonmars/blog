import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';
import type {AddCommentFormScheme} from '../types/addCommentForm';

const initialState: AddCommentFormScheme = {
	text: '',
};

const addCommentFormSlice = createSlice({
	name: 'addCommentForm',
	initialState,
	reducers: {
		setText(state, action: PayloadAction<string>) {
			state.text = action.payload;
		},
	},
});

export const {
	actions: addCommentFormActions,
	reducer: addCommentFormReducer,
} = addCommentFormSlice;
