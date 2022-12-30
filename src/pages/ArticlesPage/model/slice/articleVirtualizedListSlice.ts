import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';
import type {ArticleVirtualizedListScheme} from '../types/articleVirtualizedListScheme';

const initialState: ArticleVirtualizedListScheme = {};

const articleVirtualizedListSlice = createSlice({
	name: 'articleVirtualizedList',
	initialState,
	reducers: {
		setItemIndex(state, action: PayloadAction<number | undefined>) {
			state.itemIndex = action.payload;
		},
	},
});

export const {
	actions: articleVirtualizedListActions,
	reducer: articleVirtualizedListReducer,
} = articleVirtualizedListSlice;
