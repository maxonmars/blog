import { classNames } from 'shared/lib/classNames/classNames';
describe('classNames', function () {
    test('single class', function () {
        expect(classNames(['someClass'])).toBe('someClass');
    });
    test('multiClass', function () {
        expect(classNames(['someClass', 'someClass2'])).toBe('someClass someClass2');
    });
    test('filtering undefined', function () {
        expect(classNames([undefined])).toBe('');
    });
    test('empty arguments', function () {
        expect(classNames()).toBe('');
    });
    test('with mods', function () {
        expect(classNames(['someClass'], { isValue: true, isValue2: false }))
            .toBe('someClass isValue');
    });
});
//# sourceMappingURL=classNames.test.js.map