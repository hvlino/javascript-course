const makeTitle = (str) => {
    newArr = str.split(' ');
    for (let i = 0; i < newArr.length; i++) {
        newArr[i] = newArr[i][0].toUpperCase() + newArr[i].substr(1);
}
    newArr = newArr.join(" ");
    return newArr;
}





const Test = {
    assertSimilar: (v, e) => expect(v).toBe(e),
}
test('findNemo', () => {
Test.assertSimilar(makeTitle("I am a title"), "I Am A Title")
Test.assertSimilar(makeTitle("I AM A TITLE"), "I AM A TITLE")
Test.assertSimilar(makeTitle("i aM a tITLE"), "I AM A TITLE")
Test.assertSimilar(makeTitle("the first letter of every word is capitalized"), "The First Letter Of Every Word Is Capitalized")
Test.assertSimilar(makeTitle("I Like Pizza"), "I Like Pizza")
Test.assertSimilar(makeTitle("Don't count your ChiCKens BeFore They HatCh"), "Don't Count Your ChiCKens BeFore They HatCh")
Test.assertSimilar(makeTitle("All generalizations are false, including this one"), "All Generalizations Are False, Including This One")
Test.assertSimilar(makeTitle("Me and my wife lived happily for twenty years and then we met."), "Me And My Wife Lived Happily For Twenty Years And Then We Met.")
Test.assertSimilar(makeTitle("There are no stupid questions, just stupid people."), "There Are No Stupid Questions, Just Stupid People.")
Test.assertSimilar(makeTitle("1f you c4n r34d 7h15, you r34lly n33d 2 g37 l41d"), "1f You C4n R34d 7h15, You R34lly N33d 2 G37 L41d")
Test.assertSimilar(makeTitle("PIZZA PIZZA PIZZA"), "PIZZA PIZZA PIZZA")
});
