console.log('Your code goes here!');
function add(n1, n2) {
    return n1 + n2;
}
function addSecond(n1, n2, message) {
    if (typeof n1 !== 'number' || typeof n2 !== 'number') {
        throw new Error('Incorrect input!');
    }
    if (typeof message === 'string')
        console.log('oi');
    return n1 + n2;
}
var number1 = 5;
var number2 = 2.8;
var result = addSecond(number1, number2, 'max');
console.log('result: ', result);
