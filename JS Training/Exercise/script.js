// Advance Loop

const basket = ['apples', 'oranges', 'grapes'];

const detailedBasket = {
    apples: 6,
    oranges: 3,
    grapes: 10,
};

// for of // iterating
for (const item of basket) {
    console.log(item);
}

//for in
for (const item in detailedBasket) {
    const element = detailedBasket[item];
    console.log(`${item}: ${element}`);
}