const sumPoligon = (n) => (((n-2) * 180));

test('sumPoligon', () => {
    expect(sumPoligon(3)).toBe(180);
    expect(sumPoligon(10)).toBe(1440);
    expect(sumPoligon(21)).toBe(3420);
 });
