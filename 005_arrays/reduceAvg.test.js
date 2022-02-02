const reduceAvg = (obj = []) => {
    return obj.reduce((prev, curr) => prev + curr) / obj.length;
}



const Test = {
    assertEquals: (v, e) => expect(v).toBe(e),
}
test('reduceAvg', () => {
    Test.assertEquals(reduceAvg([1,2,3]), 2);
    Test.assertEquals(reduceAvg([1,2,3,4,5,9]), 4);
    Test.assertEquals(reduceAvg([0,-100]), -50);
    Test.assertEquals(reduceAvg([1.4, 4.5, 46.7, 203.4]), 64);
})
