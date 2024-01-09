////This JavaScript code demonstrates the use of the forEach method to iterate over each element in an array and perform an operation on each element. Let's break down the code:

var arr = ["C", "C++", "Python"];

arr.forEach(function (fetch) {
  document.write(fetch);
});

// Here's an explanation of each part of the code:

// var arr = ["C", "C++", "Python"];:

// Creates an array named arr containing three programming language names: "C", "C++", and "Python".
// arr.forEach(function(fetch) { document.write(fetch); });:

// Uses the forEach method on the array arr to iterate over each element in the array.
// For each element, it executes the provided callback function. In this case, the callback function takes an element (referred to as fetch in this case) and writes it to the document using document.write.
// document.write(fetch);:

// Writes each programming language name to the document.
// So, the output of this code will be the concatenation of the three programming language names "C", "C++", and "Python" written to the document. The forEach loop is a convenient way to perform an operation on each element of an array without explicitly writing a traditional for loop. In this case, it prints each language name one after another.
