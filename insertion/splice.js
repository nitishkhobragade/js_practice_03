//6. The splice method

console.log("The splice method");
//You can insert elements anywhere in the array using the splice method().
//The splice method is used in the following way: array.splice(index, how many to delete, element 1, element 2).

console.log(
  "The splice method is used in the following way: array.splice(index, how many to delete, element 1, element 2).",
);

let a = ["1", "2", "3"];

a.splice(2, 0, "4", "5");
console.log(a);
