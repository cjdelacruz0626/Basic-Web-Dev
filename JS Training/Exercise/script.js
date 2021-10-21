//Advance Object

//Reference type
const object1 = { value: 10};
const object2 = object1;
const object3 = { value: 10};

console.log(object1 === object3);

//Context
const object4 = {
    a: function () {
        console.log(this);
    }
}


//Instantiation 
class Player {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    
    introduce() {
        console.log(`Hello, I am ${this.name}, I'm a ${this.type}`);
    }
}

class Wizard extends Player {
    constructor(name, type) {
        super(name, type);
    }

    play() {
        console.log(`Wow, I'm a ${this.type}`);
    }
}

const wizard1 = new Wizard('Jenny', 'Healer');
const wizard2 = new Wizard('CJ', 'Healer');

console.log(wizard2.introduce());