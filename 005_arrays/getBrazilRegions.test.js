const getBrazilRegions = (states = []) => {
    return states.map ((elem) => {
        return elem.region;
    }).reduce((prev, curr)=> {
        console.log (prev[curr] = (prev[curr] || 0) + 1);
        return prev;
    }, {})
}


const allStates = [
    { state: 'SP', region: 'Sudeste' },
    { state: 'MG', region: 'Sudeste' },
    { state: 'ES', region: 'Sudeste' },
    { state: 'RJ', region: 'Sudeste' },
    { state: 'SC', region: 'Sul' },
    { state: 'PR', region: 'Sul' },
    { state: 'RS', region: 'Sul' },
    { state: 'MT', region: 'Centro_Oeste' },
    { state: 'MS', region: 'Centro_Oeste' },
    { state: 'GO', region: 'Centro_Oeste' },
    { state: 'DF', region: 'Centro_Oeste' },
    { state: 'AC', region: 'Norte' },
    { state: 'AM', region: 'Norte' },
    { state: 'RR', region: 'Norte' },
    { state: 'RO', region: 'Norte' },
    { state: 'PA', region: 'Norte' },
    { state: 'AP', region: 'Norte' },
    { state: 'TO', region: 'Norte' },
    { state: 'MA', region: 'Nordeste' },
    { state: 'PI', region: 'Nordeste' },
    { state: 'CE', region: 'Nordeste' },
    { state: 'RN', region: 'Nordeste' },
    { state: 'PB', region: 'Nordeste' },
    { state: 'PE', region: 'Nordeste' },
    { state: 'AL', region: 'Nordeste' },
    { state: 'SE', region: 'Nordeste' },
    { state: 'BA', region: 'Nordeste' },
]


const Test = {
    assertEquals: (v, e) => expect(v).toEqual(e),
};
test('getBrazilRegions', () => {
    Test.assertEquals(getBrazilRegions(allStates), { Sudeste: 4, Nordeste: 9, Norte: 7, Sul: 3, Centro_Oeste: 4})
});
