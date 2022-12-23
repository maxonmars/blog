import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';
import type {RestorationScrollScheme} from '../types/RestorationScrollScheme';

const initialState: RestorationScrollScheme = {
	scroll: {sdd: 0},
};

const restorationScrollSlice = createSlice({
	name: 'restorationScroll',
	initialState,
	reducers: {
		setScrollPosition(state, {payload}: PayloadAction<{path: string; position: number}>) {
			state.scroll[payload.path] = payload.position;
		},
	},
});

export const {
	actions: restorationScrollActions,
	reducer: restorationScrollReducer,
} = restorationScrollSlice;
