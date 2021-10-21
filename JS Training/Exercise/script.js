//Advance Array

const array = [1, 2, 3, 4, 5];

//Map
console.log(array.map((num) => num * 2 ));


//Filter
console.log(array.filter(num => num >= 1));


//Reduce
console.log(array.reduce((acc, num) => {
    return acc + num;
}, 5));


