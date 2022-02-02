const findSum = (num = 0) => {

    const numArr = num.toString().split('');
    let sum = 0;
    for (let i = 0; i < numArr.length; i++) {
        sum += parseInt(numArr[i]);
    }

    return sum < 10 ? sum : findSum(sum);

}

 test('findSum', () => {
    expect(findSum(491983)).toBe(7);
    expect(findSum(15022001)).toBe(2);
    expect(findSum(29091989)).toBe(2);
});
