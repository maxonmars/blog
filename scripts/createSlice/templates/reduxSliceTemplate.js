const firstCharUpperCase = require('../firstCharUpperCase');

module.exports = sliceName => {
	const typeName = `${firstCharUpperCase(sliceName)}Schema`;

	return (
		`import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';
import type {${typeName}} from '../types/${sliceName}Schema';

const initialState: ${typeName} = {};

export const ${sliceName}Slice = createSlice({
	name: '${sliceName}',
	initialState,
	reducers: {
		template(state, action: PayloadAction<string>) {},
	},
	//extraReducers: (builder) => {
	//	builder
	//		.addCase(, (state) => {
	//			state.error = undefined;
	//			state.isLoading = true;
	//		})
	//		.addCase(, (state) => {
	//			state.isLoading = false;
	//		})
	//		.addCase(, (state, action) => {
	//			state.isLoading = false;
	//			state.error = action.payload;
	//		});
	//},
});

export const {
	reducer: ${sliceName}Reducer,
	actions: ${sliceName}Actions
} = ${sliceName}Slice;
`);
};
