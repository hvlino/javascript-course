const arraySum = (arr = []) => {
    if (arr.length === 0) {
        return 0
    }
    return arr[0] + arraySum(arr.slice(1));
}

test('arraySum', () => {
    expect(arraySum([1, 2, 3, 4])).toBe(10);
    expect(arraySum([-1, -1, -1])).toBe(-3);
    expect(arraySum([])).toBe(0);
 });
