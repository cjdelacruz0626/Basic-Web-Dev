// closure

const first = () => {
    const greet = 'hi';
    const second = () => {
        const name = "Dougy";
        console.log(greet);
    }

    return second;
}

const newFunc = first();
console.log(newFunc());

//Currying
const curriedMultyiply = (a) => (b) => a * b;
const multiply = curriedMultyiply(5)(8);

console.log(multiply);

//Compose
const compose = (f, g) => (a) => f(g(a));
const sum = (num) => num + 1;
const sub = (num) => num - 1;

console.log(compose(sum, sub)(5));