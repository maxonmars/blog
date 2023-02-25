import type {CaseReducerActions} from '@reduxjs/toolkit';
import {bindActionCreators, createSlice} from '@reduxjs/toolkit';
import type {SliceCaseReducers, CreateSliceOptions} from '@reduxjs/toolkit/dist';
import {useMemo} from 'react';
import {useAppDispatch} from '@/shared/hooks';

export const buildSlice = <
	State,
	CaseReducers extends SliceCaseReducers<State>,
	Name extends string = string,
>(options: CreateSliceOptions<State, CaseReducers, Name>) => {
	const slice = createSlice(options);

	const useActions = (): CaseReducerActions<CaseReducers> => {
		const dispatch = useAppDispatch();

		// @ts-expect-error
		return useMemo(() => bindActionCreators(slice.actions, dispatch), [dispatch]);
	};

	return {
		...slice,
		useActions,
	};
};
