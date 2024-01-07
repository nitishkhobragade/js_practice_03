//Array.find()
//We use the Array.find() method to find the first element that meets a certain condition. Just like the filter method, it takes a callback as an argument and returns the first element that meets the callback condition.

const array = [10, 11, 3, 20, 5];

const greaterThanTen = array.find((element) => element > 10);

console.log(greaterThanTen);

//The syntax for the array.find() is

//let element = array.find(callback);

//The callback is the function that is executed on each value in the array and takes three arguments:

//element - the element being iterated on (required)

//index - the index/position of the current element (optional)

//array - the array that find was called on (optional)

//Note, though, that if no item in the array meets the condition, it returns undefined.
