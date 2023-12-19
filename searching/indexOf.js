//Array.indexOf()
//The indexOf() method returns the first index at which a given element can be found in an array. It returns -1 if the element does not exist in the array.

let array = [10, 11, 3, 20, 5];

const indexOfThree = array.indexOf(3);

console.log(indexOfThree);

//Its syntax is similar to that of the includes method.

//const indexOfElement = array.indexOf(element, fromIndex)

//Where

//element is the element you are checking for in the array (required), and
//fromIndex is the index or position in the array that you want to start searching for the element from (optional)

//It's important to note that both the includes and indexOf methods use strict equality( '===' ) to search the array. If the values are of different types (for example '4' and 4), they'll return false and -1 respectively.
