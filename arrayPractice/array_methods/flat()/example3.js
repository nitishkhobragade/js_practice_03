// Example3

// Let's flatten an array upto a specified depth.

var arr = [90, 18, [13, 20, [67, 17, [56, 45]]]]; //given multidimensional array
var newArr = arr.flat(3); //using flat() method with a specified depth value.
document.write("After flattening the array:  " + newArr);
