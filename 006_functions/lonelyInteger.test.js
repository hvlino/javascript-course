const lonelyInteger = (arr = []) => {
    for (let i = 0; i < arr.length; i++) {
        if (!arr.includes(-1 * arr[i])) return arr[i];
    }
    throw new Error('You need a lonely integer in your array');
}

test('lonelyInteger', () => {
    expect(lonelyInteger([-3, 1, 2, 3, -1, -4, -2])).toBe(-4);
    expect(lonelyInteger([1, -1, 2, -2, 3, 3])).toBe(3);
    expect(lonelyInteger([-9, -105, -9, -9, -9, -9, 105])).toBe(-9);
    expect(() => lonelyInteger([1, -1, 2, -2])).toThrow();
 });
 