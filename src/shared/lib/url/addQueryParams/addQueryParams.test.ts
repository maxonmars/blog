import {getQueryParams} from 'shared/lib/url/addQueryParams/addQueryParams';

describe('addQueryParams', () => {
	test('should be one value', () => {
		const params = getQueryParams({
			test: 'value',
		});

		expect(params).toBe('?test=value');
	});
	test('should be two value', () => {
		const params = getQueryParams({
			test: 'value',
			testTwo: 'twoValue',
		});

		expect(params).toBe('?test=value&testTwo=twoValue');
	});
	test('should be one value', () => {
		const params = getQueryParams({
			test: 'value',
			testTwo: undefined,
		});

		expect(params).toBe('?test=value');
	});
	test('should be - ?', () => {
		const params = getQueryParams({});

		expect(params).toBe('?');
	});
});
