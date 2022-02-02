class Animal {
    name = '';
    age = 0;
    isAlive = false;
    hasWings = false;
    canSwim = false;
    canWalk = true;
    hasGill = false;
    hasLungs = true;


    constructor(_name, _age) {
        this.born();
        this.name = _name;
        this.age = _age;
    }

    born() {
        this.isAlive = true;
        console.log('Hello world');
    }

    die() {
        this.isAlive = false;
        return ('Good bye!');
    }

    eat(food) {
        if (this.isAlive === false) {
            return (`I can't eat. I died`);
        } else if (this.isAlive === true) {
            return (`This ${food} is delicious`);
        }
    }

    reproduce() {
        return 'Mais um';
    }
}

class Fish extends Animal {
    canSwim = true;
    canWalk = false;
    hasGill = true;
    hasLungs = false;

    born() {
        this.isAlive = true;
        console.log('glub glub');
    }
}

class Shark extends Fish {
    hasManyTeeth = true;
}

test('Animal test', () => {
    const eagle = new Animal('Galvao', 12);
    const dog = new Animal('Rex', 0.4);

    expect(eagle.name).toBe('Galvao');
    expect(dog.name).toBe('Rex');
    expect(eagle.isAlive).toBe(true);

    expect(eagle.eat('little mouse')).toBe(`This little mouse is delicious`);

    eagle.die();
    expect(eagle.isAlive).toBe(false);

    expect(eagle.eat('little mouse')).toBe(`I can't eat. I died`);

});

test('Fish test', () => {

    const shark = new Shark('Tuba', 33);
    const cat = new Animal('Bigodes', 2);
    expect(shark.canSwim).toBe(true);
    expect(cat.canSwim).toBe(false);

});
