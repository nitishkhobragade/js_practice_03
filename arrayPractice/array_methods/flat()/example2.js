// Example2

// Testing a multidimensional array with flat() method.

var arr = [90, 18, [89, 56], [13, 20, [67, 17]]]; //given multidimensional array
var newArr = arr.flat(); //using flat() method
document.write("After flattening the array:  " + newArr);

// Output:

// It is clear that each element in the array is concatenated to the newly created 1D array.
