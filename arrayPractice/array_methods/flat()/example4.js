// Example4

// Using flat() method with depth value as infinity.

var arr = [
  "Orange",
  "Pineapple",
  "Grapes",
  ["Potato", "Tomato", "Carrot", ["Guava", "Litchi"]],
]; //given a multidimensional array.
var newArr = arr.flat(Infinity); //setting depth value as infinity.
document.write(
  "After flattening the array,the new array comes out:  " + newArr,
);
