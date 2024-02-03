////Another implementation of array values() method using for...of loop.

const arr = ["P", "Q", "R", "S", "T"]; //Initializing array elements.

const itr = arr.values();
document.write("The array elements are: <br>");

for (let x of itr) {
  document.write(x);
} //This loop will iterate and print the array elements
