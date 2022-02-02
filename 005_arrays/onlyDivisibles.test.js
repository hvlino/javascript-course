
function onlyDivisibles(numbers = [], divisor = 0) {
    return numbers.filter((elem) => {
        if (elem % divisor === 0) {
            return (elem / divisor);
        };
    })
}

test('onlyDivisibles', () => {
    expect(onlyDivisibles([200, 345, 410, 1200, 1500, 3], 2)).toEqual([100, 205, 600, 750]);
    expect(onlyDivisibles([200, 345, 410, 1201, 1.4, 3], 5)).toEqual([40, 69, 82]);
});
