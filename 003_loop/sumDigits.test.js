function sumDigits(num) {
    let n = num;
    let times = 0;
    while (n >= 1) {
        n = n / 10;
        times++;
    }
    return (times);
}

test('sumDigits', () => {
    expect(sumDigits(10)).toBe(2);
    expect(sumDigits(100)).toBe(3);
    expect(sumDigits(5430985678)).toBe(10);
});
