// const displayName = prompt('Qual seu nome?');
// // Simple if else
// if (displayName === 'Johnny') {
//     console.log('Sou Johnny');
// } else {
//     console.log('Meu nome não é Johnny');
// }


// // Ternary
// console.log(displayName === 'Johnny' ? 'Sou Johnny' : 'Meu nome não é Johnny');


// const year = prompt('Qual ano vc nasceu?');

// if (year <= 2004) {
//     alert('Você já pode ir preso!');
// } else {
//     alert('Você ainda não pode beber!');
// }


/* const diameterStr = prompt('Qual o diametro do círculo?');
const diameter = parseFloat(diameterStr);
const circleArea = (Math.PI * (diameter * diameter)) / 4;
if (circleArea >= 100) {
    alert ('Muito grande');
}
else {
    alert (circleArea);
}    */

// Qual o valor da conta do restaurante?
// E vai dividir em quantas pessoas?
//Qual o valor que cada um tem que pagar aplicando 10% do garçon.
// só aplica 10 por cento se o valor de cada um for maior que 20 reais.
const valorStr = prompt('Qual o valor da conta?');
const numeroPessoasStr = prompt('Vai dividir para quantas pessoas?');
const valor = parseFloat(valorStr);
const numeroPessoas = parseFloat(numeroPessoasStr);
const final = valor / numeroPessoas;

if (final >= 20) {
    alert (final * 1.1);
} else {
    alert(final);
}