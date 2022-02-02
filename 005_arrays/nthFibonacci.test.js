const cache = [];

const fibonacci = (n = 0) => {
    if (cache[n]) return cache[n];
    if (n <= 2) return 1;
    const result = fibonacci(n - 1) + fibonacci(n - 2);
    cache[n] = result;
    return result;
}
test('fibonacci', () => {
    expect(fibonacci(1)).toBe(1);
    expect(fibonacci(2)).toBe(1);
    expect(fibonacci(3)).toBe(2);
    expect(fibonacci(2)).toBe(1);
    expect(fibonacci(9)).toBe(34);
    expect(fibonacci(6)).toBe(8);
    expect(fibonacci(10)).toBe(55);
    expect(fibonacci(20)).toBe(6765);
    expect(fibonacci(40)).toBe(102334155);
    expect(fibonacci(50)).toBe(12586269025);
    expect(fibonacci(100)).toBe(354224848179262000000);
});
