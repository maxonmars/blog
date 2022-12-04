import type {StateScheme} from 'app/providers/StoreProvider';
import {selectArticleDetailsData, selectArticleDetailsIsLoading, selectArticleDetailsError} from './selectArticleDetails';

describe('selectArticleDetails', () => {
	test('should be select equal data', () => {
		const data = {
			id: '1',
			title: 'test title',
		};
		const state: DeepPartial<StateScheme> = {
			articleDetails: {
				data,
			},
		};
		expect(selectArticleDetailsData(state as StateScheme)).toEqual(data);
	});
	test('should be undefined if empty selectArticleDetailsData', () => {
		const state: DeepPartial<StateScheme> = {};
		expect(selectArticleDetailsData(state as StateScheme)).toBe(undefined);
	});
	test('should be select isLoading true', () => {
		const state: DeepPartial<StateScheme> = {
			articleDetails: {
				isLoading: true,
			},
		};
		expect(selectArticleDetailsIsLoading(state as StateScheme)).toBe(true);
	});
	test('should be select error string', () => {
		const state: DeepPartial<StateScheme> = {
			articleDetails: {
				error: 'error',
			},
		};
		expect(selectArticleDetailsError(state as StateScheme)).toBe('error');
	});
});
