////This JavaScript code calculates the cumulative sum of elements in an array using the forEach method. Let's break down the code:

var sum = 0;
var arr = [10, 18, 12, 20];

arr.forEach(function myFunction(element) {
  sum = sum + element;
  document.write(sum);
});

////Here's an explanation of each part of the code:

// var sum = 0;: Initializes a variable sum to zero. This variable will be used to accumulate the sum of elements in the array.

// var arr = [10, 18, 12, 20];: Creates an array named arr with four numeric elements.

// arr.forEach(function myFunction(element) { ... });: Uses the forEach method on the array arr to iterate over each element in the array.

// function myFunction(element) { ... }: Defines a callback function named myFunction. This function takes an element as a parameter, and for each element in the array, it performs the following operations:

// Adds the current element to the sum variable (sum = sum + element;).
// Writes the updated sum to the document using document.write(sum);.
// So, as the forEach loop iterates through each element in the array, it adds the current element to the cumulative sum (sum) and prints the updated sum to the document. The output will be the cumulative sum at each step of the iteration.

// For the given array [10, 18, 12, 20], the output would be:

// 10   // sum = 10
// 28   // sum = 10 + 18
// 40   // sum = 10 + 18 + 12
// 60   // sum = 10 + 18 + 12 + 20
