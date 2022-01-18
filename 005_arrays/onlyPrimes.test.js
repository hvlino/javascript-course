
/* function onlyPrime(num) {
    const arr = [];
    for (i = 0; i <= num; i++)) {
        if (i % 2 !== 0) {
            sum = 0;
            let by3 = i;
            if (while (by3 > 0) {
                    sum += by3 % 10;
                    by3 = Math.floor(i / 10);
                }
                if (i % 5 )
        }
    }
} */

function isPrime(n) {
    if (isNaN(n) || !isFinite(n) || n % 1 || n < 2) return false;
    var m = Math.sqrt(n); //returns the square root of the passed value
    for (var i = 2; i <= m; i++)
        if (n % i === 0) return false;
    return true;
}


function onlyPrime(num) {
    const arr = [];
    for (i = 1; i <= num; i++) {
        if (isPrime(i)) {
            arr.push(i);
        }
    }
    return arr;
}



test('onlyPrime', () => {
    expect(onlyPrime(9)).toEqual([2, 3, 5, 7]);
    expect(onlyPrime(15)).toEqual([2, 3, 5, 7, 11, 13]);
    expect(onlyPrime(77)).toHaveLength(21);
    expect(onlyPrime(1133)).not.toContain(1133);
});
