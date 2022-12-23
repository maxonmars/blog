import {classNames} from './classNames';

describe('classNames', () => {
	test('single class', () => {
		expect(classNames(['someClass'])).toBe('someClass');
	});

	test('multiClass', () => {
		expect(classNames(['someClass', 'someClass2'])).toBe('someClass someClass2');
	});

	test('filtering undefined', () => {
		expect(classNames([undefined])).toBe('');
	});

	test('empty arguments', () => {
		expect(classNames()).toBe('');
	});

	test('with mods', () => {
		expect(classNames(
			['someClass'],
			{isValue: true, isValue2: false}))
			.toBe('someClass isValue');
	});
});
