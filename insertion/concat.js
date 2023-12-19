//3. The concat method

//The concat() method doesn’t actually append elements to an existing array but instead, creates a brand new array.

//This means that the original array won’t change.

let originalArray = ["1", "2", "3"];
let appendingArray = ["4", "5", "6"];
let newArray = originalArray.concat(appendingArray);

console.log(newArray);

console.log(originalArray);

//You can also take an empty array and concat multiple arrays. We do that by adding multiple parameters in the concat method.

//Here is an example:

let a = ["1", "2", "3"];
let b = ["4", "5", "6"];

let result = [].concat(a, b);

console.log(result);

//if you have to join multiple arrays together

const arr1 = ["?", "?"];
const arr2 = ["?", "?"];
const arr3 = ["?", "?"];

const arr4 = arr1.concat(arr2, arr3);
console.log("arr4 is");
console.log(arr4);

//cloning with concat
console.log("Cloning with help of concat");
const arrX = ["?", "?", "?", "?", "?", "?"];

const arrY = [].concat(arrX);

arrY.push("?");

console.log(arrX); 
console.log(arrY); 
