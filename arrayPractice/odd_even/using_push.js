//Write a program in which we have a array of different positive numbers , you have to display
//how many odd and even numbers
//sum of odd numbers
//sum of even numbers
//sum of all numbers
//display odd numbers
//display even numbers

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

let odd = 0;
let even = 0;
let oddArray = [];
let evenArray = [];
let evenSum = 0;
let oddSum = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 == 0) {
    even++;
    evenArray.push(numbers[i]);
    evenSum += numbers[i];
  } else {
    odd++;
    oddArray.push(numbers[i]);
    oddSum += numbers[i];
  }
}
let result = even + odd;

console.log("Even no :", even);
console.log("Odd no :", odd);
console.log(" Total Number of Even + Odd :", result);
console.log("Even Array :", evenArray);
console.log("odd Array :", oddArray);
console.log("odd Sum :", oddSum);
console.log("Even Sum  :", evenSum);
console.log("Sum of All Numbers  :", evenSum + oddSum);
