const isANumber = (num) => {
    return !isNaN(num);
}

const isOdd = (num, fnChecker) => {
    if (fnChecker(num)) return num % 2 !== 0;
}


test('isANumber', () => {
   expect(isANumber(1)).toBe(true);
   expect(isANumber(0.56)).toBe(true);
   expect(isANumber('a')).toBe(false);
});

const allTests = function() {
    expect(isOdd(2, isANumber)).toBe(false);
    expect(isOdd(5, isANumber)).toBe(true);
    expect(isOdd(5, (num) => !isNaN(num))).toBe(true);
 };

test('isOdd', allTests);
