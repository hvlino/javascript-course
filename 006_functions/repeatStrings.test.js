const repeatStrings = (txt = "", n = 0) => {

    if (n === 1) {
        return txt;
    }
    else {
        return txt.concat(repeatStrings(txt, n-1));
    }
}





test('repeatStrings', () => {
    expect(repeatStrings("bonita", 2)).toBe("bonitabonita");
    expect(repeatStrings("ab", 3)).toBe("ababab");
 });
