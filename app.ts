console.log('Your code goes here!')

function add (n1: number, n2: number): number {
  return n1 + n2
}


function addSecond (n1: number, n2: number): number {
  if (typeof n1 !== 'number' || typeof n2 !== 'number') {
    throw new Error('Incorrect input!')
  }
  return n1 + n2
}

const number1 = 5
const number2 = 2.8

const result = add(number1, number2)

console.log('result: ', result)
