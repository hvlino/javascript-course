const reduceSum = (obj = []) => {
    const reduced = obj.reduce((accumulator, currentValue, i) => {
        if (i < 3) return accumulator + currentValue;
        return accumulator;
    });
    return reduced;
}



const Test = {
    assertEquals: (v, e) => expect(v).toBe(e),
}
test('reduceSum', () => {
    Test.assertEquals(reduceSum([1,2,3]), 6);
    Test.assertEquals(reduceSum([1,2,3,4,5,6]), 6);
    Test.assertEquals(reduceSum([100,1,200,3230249329]), 301);

})
