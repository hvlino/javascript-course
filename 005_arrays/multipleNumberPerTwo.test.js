const multipleNumberPerTwo = (numbers = []) => {
    return numbers.map((element) => {

        return element > 0 ? 2 * element : (-1) * 3 * element;
    });

}

 test('multipleNumberPerTwo', () => {
    expect(multipleNumberPerTwo([1, 6, 12, 22, 25, 100, -1, -30])).toEqual([2, 12, 24, 44, 50, 200, 3, 90]);
});
