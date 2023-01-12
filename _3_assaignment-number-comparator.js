// ! find entered numbers Sum , multiple, max , min 
let firstNumber = +prompt("Enter first number: ");
let secondNumber = +prompt("Enter second number: ");
let thirdNumber = +prompt("Enter third number: ");


let sum = firstNumber + secondNumber + thirdNumber;

let multiple = firstNumber * secondNumber * thirdNumber;

let max = Math.max(firstNumber, secondNumber, thirdNumber);

let min = Math.min(firstNumber, secondNumber, thirdNumber);     


console.log('summe of numbers: ', sum);
console.log('multiple of numbers: ', multiple);
console.log('maximum number:', max);
console.log('minumum number:', min);

