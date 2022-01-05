// Atribuition
const name = 'Henrique';

// Math
const addition = 1 + 1;
const subtraction = 10 - 2;
const mod = 2 % 1;
const multiplication = 2 * 2;
const division = 1 / 5;

// Comparatives (returns true or false)
// Equal
const a = (2 == '2'); // true
const b = (2 === '2'); // false

// Not equal
const c = ('x' != 'x'); // false
const d = ('3' !== 3); // true


// And 
const e = ('a' === 'a') && ('b' === 'b'); // true
const f = ('a' !== 'x') && ('b' === 'b'); // true
const g = 1 > 2 && 10 === 10 && true; // false

// Or
const h = 1 === 2 || 'a' === 'a'; // true
const i = (10 - 4 > 1 + 3) && (Math.PI < 3) || (11 % 3 > 1); // true

// Inversor
const n = !((10 + 20) / 15 === 2); // false

// gt / gte / lt / lte
const j = 2 < 10; // true
const j = 2 >= 2; // true

// Concatenation
const fullName = 'John' + ' ' + 'Nash'; // John Nash
const shirt1 = 'Camisa' + 9 + 1; // Camisa91
const shirt2 = 'Camisa' + (9 + 1); // Camisa10

// Increment / Decrement
const two = 1++;
const zero = 1--;

// Ternary
// Usual if
if (2 % 2 === 0) {
    console.log('true');
} else {
    console.log('false');
}
// Ternary if
console.log((2 % 2 === 0) ? 'true' : 'false');