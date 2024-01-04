// Example 1
// Here, we will pass the target, start and end index with the method.

let arr = ["React.js", "Node.js", "JQuery", "Bootstrap"];

console.log("Current array is - ", arr);
// place at 0th position, the element between 1st and 2nd position.
let result = arr.copyWithin(0, 1, 2);

console.log(
  "After using copyWithin method - arr.copyWithin(0, 1, 2)  result is :- ",
  result,
);

console.log("After using method original array is - ", arr);
