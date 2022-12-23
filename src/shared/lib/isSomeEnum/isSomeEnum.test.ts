import {isSomeEnum} from './isSomeEnum';

enum Test {
	A = 'A',
	B = 'B',
	C = 'C',
}

describe('isSomeEnum', () => {
	test('should be token match Enum', () => {
		const ieEnum = isSomeEnum(Test);
		expect(ieEnum('A')).toBe(true);
		expect(ieEnum('B')).toBe(true);
		expect(ieEnum('C')).toBe(true);
	});
	test('should be token not match Enum', () => {
		const ieEnum = isSomeEnum(Test);
		expect(ieEnum('g')).toBe(false);
		expect(ieEnum('a')).toBe(false);
		expect(ieEnum(1)).toBe(false);
	});
});
