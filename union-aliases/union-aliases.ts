type Combinable = number | string; // types aliases
type ConversionDescriptor = 'as-number' | 'as-text'; // literals types

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor,
) {
  let result
  if (typeof input1 === 'number' && typeof  input2 === 'number' || resultConversion === 'as-number') {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  return result;

  // if (resultConversion === 'as-number') {
  //   return +result; // + converte to a number
  // } else {
  //   return result.toString();
  // }
}

const combineAges = combine(30, 26, 'as-number');
console.log(combineAges)

const combinedStringAges = combine('30', '50', 'as-number');
console.log(combinedStringAges);

const combineNames = combine('William', ' Henrique', 'as-text');
console.log(combineNames)


/*
* function combine(input1: number | string, input2: number | string, resultConversion: string) {
  let result
  if (typeof input1 === 'number' && typeof  input2 === 'number' || resultConversion === 'as-number') {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  return result;

  // if (resultConversion === 'as-number') {
  //   return +result; // + converte to a number
  // } else {
  //   return result.toString();
  // }
}
*
*
* */