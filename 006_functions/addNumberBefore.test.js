const addNumbers = (num) => {
    if (num <= 0) {
        return 0;
    }
    return num + addNumbers(num - 1);
}

test('addNumbers', () => {
    expect(addNumbers(1)).toBe(1);
    expect(addNumbers(4)).toBe(10);
 });
