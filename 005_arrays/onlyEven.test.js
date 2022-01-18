
function onlyEven(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            arr[i]++;
        }
    }
    return arr;
}

test('onlyEven', () => {
    expect(onlyEven([0, 1, 2, 3, 4, 5])).toEqual([0, 2, 2, 4, 4, 6]);
    expect(onlyEven([1, 3, 5])).toEqual([2, 4, 6]);
    expect(onlyEven([7, 15787, 888])).toEqual([8, 15788, 888]);

});
