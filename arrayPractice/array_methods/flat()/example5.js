// Example5

// Let's flatten an array with holes in between.

var arr = ["John", "Peter", , "Tomy", ["Eni", , "Kerry"]]; //given 2D array with holes in between.
var newArr = arr.flat(); //using flat() method.
document.write(
  "After flattening the array, the holes vanishes. The new array comes out: " +
    newArr,
);

// output:
// It is clear that all array elements are concatenated leaving the holes out, after applying the flat() method.
