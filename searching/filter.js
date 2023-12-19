//Array.filter()
//We can use the Array.filter() method to find elements in an array that meet a certain condition. For instance, if we want to get all items in an array of numbers that are greater than 10, we can do this:

const array = [10, 11, 3, 20, 5];

const greaterThanTen = array.filter((element) => element > 10);

console.log(greaterThanTen);

//The syntax for using the array.filter() method is the following:

//let newArray = array.filter(callback);

// where

// newArray is the new array that is returned
// array is the array on which the filter method is called
// callback is the callback function that is applied to each element of the array
