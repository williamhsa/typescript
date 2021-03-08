function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log('Result ' + num);
  return;
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResult(add(5,5));

// let combinedValues: Function;
let combinedValues:  (a: number, b: number) => number
combinedValues = add;
// combinedValues = printResult;

console.log(combinedValues(8, 8));

addAndHandle(10, 20, (result) => {
  console.log(result);
});

// function printResultTwo(num: number): undefined {
//   console.log('Result ' + num);
//   return
// }