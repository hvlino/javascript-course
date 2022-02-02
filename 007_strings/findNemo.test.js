const findNemo = (arr) => {
    splittedArray = arr.split(' ');
    const nemoIndex = splittedArray.indexOf("Nemo");
    if (nemoIndex + 1 === 0) {
        return "I can't find Nemo :("
    }
    return `I found Nemo at ${nemoIndex + 1}!`;
}


const Test = {
    assertEquals: (v, e) => expect(v).toBe(e),
}
test('findNemo', () => {
    Test.assertEquals(findNemo("I am Ne mo Nemo !"), "I found Nemo at 5!")
    Test.assertEquals(findNemo("N e m o is NEMO NeMo Nemo !"), "I found Nemo at 8!")
    Test.assertEquals(findNemo("I am Nemo's dad Nemo senior ."), "I found Nemo at 5!")
    Test.assertEquals(findNemo("Oh, hello !"), "I can't find Nemo :(")
    Test.assertEquals(findNemo("Is it Nemos, Nemona, Nemoor or Garfield?"), "I can't find Nemo :(")
    Test.assertEquals(findNemo("Nemo is a clown fish, he has white and orange stripes. Nemo , come back!"), "I found Nemo at 1!")

});
