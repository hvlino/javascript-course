const compoundInterestArrays = (arr, percent) => {
    let i = 1;
    return arr.map(element => {
        const newElem = i + ' - R$ ' + element * (1 + percent/100);
        i++;
        return newElem;
    });
}




test('compoundInterestArrays', () => {
    expect(compoundInterestArrays([100, 300, 200, 400], 20)).toEqual(['1 - R$ 120', '2 - R$ 360', '3 - R$ 240', '4 - R$ 480']);
});


