// let i = 0;
// while (i < 10) {
//     console.log(i);
//     i++; // i = i + 1
// }

// do {

// } while (i < 10);
// const num = prompt('Escolha um numero');
// const elev = prompt('Elevado a...');
// let result = 1;

// for (let i = 0; i < elev; i++) {
//     result = result * num;
// }
// console.log(result);

 function addUpTo(num) {
    let sum = 0;
	for (let i = 1; i <= num; i = i + 2) {
        sum = sum + i;
    }
    return sum;
}

test('addUpTo', () => {
    expect(addUpTo(10)).toBe(25);
    expect(addUpTo(3)).toBe(4);
});

// Dado num, dividir n vezes por 10 até num ser menor que 1

/* function sumDigits(num) {
    let n = num;
    let times = 0;
    while (n >= 1) {
        n = n / 10;
        times++;
    }
    return (times);
}

console.log(sumDigits(99));
console.log(sumDigits(10000));
console.log(sumDigits(123245567)); */


