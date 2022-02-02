const firstName = "James";
const lastName = "Bond";

const fullname = `Mr. ${firstName} ${lastName}`;


const creditcardHidder = (creditNumber = '') => {
    const newNumberArray = creditNumber.split("");
    const modifiedArray = newNumberArray.map((element, i) => {
        if (i > 1 && i < newNumberArray.length - 4) {
            return 'x';

        }
        return element;
    })
    return modifiedArray.join("");
}

test('creditcardHidder', () => {
    expect(creditcardHidder('374245455400126')).toBe('37xxxxxxxxx0126');
    expect(creditcardHidder('60115564485789458')).toBe('60xxxxxxxxxxx9458');
    expect(creditcardHidder('6011000991300009')).toBe('60xxxxxxxxxx0009');
});
