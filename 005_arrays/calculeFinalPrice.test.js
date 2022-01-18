function round(num) {
    var m = Number((Math.abs(num) * 100).toPrecision(15));
    return Math.round(m) / 100 * Math.sign(num);
}

function calculeFinalPrice(price, yearFee, months) {
    yearFee = yearFee / 100;
    for (i = 0; i < (months / 12); i++) {
        price = (yearFee + 1) * price;
    }
    const rounded = price.toFixed(2);
    return parseFloat(rounded);
}


test('calculeFinalPrice', () => {
    expect(calculeFinalPrice(500000, 5, 360)).toBe(2160971.19);
    expect(calculeFinalPrice(100, 12.5, 120)).toBe(324.73);
});
