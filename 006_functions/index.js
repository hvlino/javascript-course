function sayMeHello1() {
    console.log('Hello');
} // return undefined

// equivalent
const sayMeHello2 = function () {
    console.log('Hello');
}

// Array function
const sayMeHello3 = () => {
    console.log('Hello');
}

const circleArea1 = (diameter) => (diameter * diameter * Math.PI) / 4;

const circleArea2 = (diameter) => {
    return (diameter * diameter * Math.PI) / 4;
}

function sayMeSomething(word, times) {
    for (let index = 0; index < times; index++) {
        console.log(word);
    }
} // return undefined

function sum(a, b) {
    if (a === undefined || b === undefined) return 0;
    return a + b;
} // return number;

let luzAcesa = false;

const acendeLuz = () => {
    if (luzAcesa) {
        luzAcesa = !luzAcesa;
        return console.log('Apaga');
    }
    luzAcesa = !luzAcesa;
    return console.log('Acende')
}

const ligarArCondicionado = (funcaoQueLigaALuz) => {
    funcaoQueLigaALuz();
    console.log(`Ligar ar condicionado`);
}

const abrirArmario = (outraFuncaoQueLigaLuz) => {
    outraFuncaoQueLigaLuz();
    console.log('Abrir armario');
}

ligarArCondicionado(acendeLuz);
abrirArmario(acendeLuz);

