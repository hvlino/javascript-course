const formatNum = (num = 0) => {
    // Primeira tentativa
    // Checar somente numeros maiores que 999
    if (num > 999) {
        // Quebrou o numero em array de strings
        const numArr = num.toString().split('');
        // String vazia
        let strNum = '';
        // Varre a array com numeros
        for (let i = numArr.length - 1; i >= 0; i--) {
            // Pega a string com os numeros sem virgula
            const strCommaLess = strNum.replace(/,/g, '');
            // Se a posicao do numero for divisivel por 3 e a string nao for vazia
            if (strCommaLess.length % 3 === 0 && strNum.length > 0)
                // colocar o numero com virgula na frente
                strNum = numArr[i] + ',' + strNum;
            else
                // coloca o numero na frente
                strNum = numArr[i] + strNum;
        }
        return strNum;
    }
    // retorna o numero como string
    return num.toString();
}

/* const formatNum = (num = 0) => {
    let commaStr = '';
    const str = num.toString();
    for (let i = 0; i < str.length; i++) {
        if ((str.length - 4) % 3 === 0 || str.length - 4 === 0) {
            if (i % 3 === 0 && str.length > 0 && i != str.length) {
                commaStr = str.slice(0, 1) + ',' + str.slice(1);
            }
        } else if (str.length - 5 % 3 === 0 || str.length - 5 === 0) {
            if (i % 3 === 0 && str.length > 0) {
                commaStr = str.slice(0, 1) + ',' + str.slice(1);
            }
        } else if (str.length - 5 % 3 === 0 || str.length - 5 === 0) {
            if (i % 3 === 0 && str.length > 0) {
                commaStr = str.slice(0, 1) + ',' + str.slice(1);
            }
        }  else {
            return "nao deu";
        }
    }
    return commaStr;
} */



const Test = {
    assertEquals: (v, e) => expect(v).toBe(e),
}
test('formatNUM', () => {

    Test.assertEquals(formatNum(1000000), "1,000,000");
    Test.assertEquals(formatNum(10000000), "10,000,000");
    Test.assertEquals(formatNum(100000), "100,000");
    Test.assertEquals(formatNum(0), "0");

    Test.assertEquals(formatNum(20), "20");
    Test.assertEquals(formatNum(12948), "12,948");
    Test.assertEquals(formatNum(1000000), "1,000,000");
    Test.assertEquals(formatNum(122100000000), "122,100,000,000");

});
