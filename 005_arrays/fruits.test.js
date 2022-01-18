const fruits = new Array() || [];
const heroes = ['Spiderman', 'Thor', 'Iron Man'];
const mass = [0, 'John', true, undefined, null, {}];

// add elements
fruits[0] = 'Banana';
fruits.push('Apple');
fruits.unshift('Coconut');

// update elements
fruits[1] = 'Grape';

// remove elements
fruits.splice(0, 1); // delete coconut

// find element position on array
fruits.indexOf('Coconut'); // return -1
fruits.indexOf('banana'); // return -1

// find element array and return bool
fruits.includes('Grape') // returns true

// array length
fruits.length; //3


function replaceItem(arr, searchBy, replaceBy) {
    const index = arr.indexOf(searchBy);
    arr[index] = replaceBy;
    return arr;
}


test('replaceItem', () => {
    const newFruits = replaceItem(['Apple', 'Coconut', 'Banana'], 'Apple', 'Pear');
    expect(newFruits).toContain('Pear');
    expect(newFruits).not.toContain('Apple');

    const newHeroes = replaceItem(['Batman', 'Superman', 'Flash'], 'Flash', 'Aquaman');
    expect(newHeroes).toContain('Aquaman');
});


