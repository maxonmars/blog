import type {StateScheme} from 'app/providers/StoreProvider';
import {selectProfileIsReadonly} from './selectProfileIsReadonly';

describe('selectProfileIsReadonly', () => {
	test('should be true is read only', () => {
		const state: DeepPartial<StateScheme> = {
			profile: {
				isReadonly: true,
			},
		};
		expect(selectProfileIsReadonly(state as StateScheme)).toBe(true);
	});
	test('should be undefined if empty selectProfileIsReadonly', () => {
		const state: DeepPartial<StateScheme> = {};
		expect(selectProfileIsReadonly(state as StateScheme)).toBe(undefined);
	});
});
