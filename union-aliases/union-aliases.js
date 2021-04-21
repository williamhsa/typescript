function combine(input1, input2, resultConversion) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
    // if (resultConversion === 'as-number') {
    //   return +result; // + converte to a number
    // } else {
    //   return result.toString();
    // }
}
var combineAges = combine(30, 26, 'as-number');
console.log(combineAges);
var combinedStringAges = combine('30', '50', 'as-number');
console.log(combinedStringAges);
var combineNames = combine('William', ' Henrique', 'as-text');
console.log(combineNames);
