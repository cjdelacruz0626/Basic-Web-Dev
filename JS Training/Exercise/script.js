function isUserValid(bool) {
    return bool;
}
const answer = isUserValid(true) ? "You may enter" : "Access denied";

console.log(answer);

function moveCommand(direction) {
    let whatHappen

    switch (direction) {
        case "forward":
            whatHappen = "You encouter a bakulaw";
            break;
        case "back":
            whatHappen= "You arrived harong"
            break;
        case "right":
            whatHappen = "You found si naning"
            break;
        case "left":
            whatHappen = "You found yourself"
            break;
        default:
            whatHappen = "Sala ang nilalakawan mo";
    }

    return whatHappen;
}

console.log(moveCommand('right'));

const name1 = 'Jenny Lee'
const name2 = 'CJ';
const greetings1 = `Hello ${name1},  What a beautiful name you have.`;
const greetings2 = ' Okay CJ.'

const pinagsama = (a, b) => a + b;

console.log(pinagsama(greetings1, greetings2));