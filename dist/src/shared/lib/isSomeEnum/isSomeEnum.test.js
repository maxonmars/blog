import { isSomeEnum } from 'shared/lib/isSomeEnum/isSomeEnum';
var Test;
(function (Test) {
    Test["A"] = "A";
    Test["B"] = "B";
    Test["C"] = "C";
})(Test || (Test = {}));
describe('isSomeEnum', function () {
    test('should be token match Enum', function () {
        var ieEnum = isSomeEnum(Test);
        expect(ieEnum('A')).toBe(true);
        expect(ieEnum('B')).toBe(true);
        expect(ieEnum('C')).toBe(true);
    });
    test('should be token not match Enum', function () {
        var ieEnum = isSomeEnum(Test);
        expect(ieEnum('g')).toBe(false);
        expect(ieEnum('a')).toBe(false);
        expect(ieEnum(1)).toBe(false);
    });
});
//# sourceMappingURL=isSomeEnum.test.js.map