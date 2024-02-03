////Here's an example implemented using for...of loop.

var arr = ["John", "Mary", "Tom", "Harry", "Sheero"]; //Intializing array elements

var itr = arr.values(); //Using values() method.
document.write("The array elements are:<br>");
for (let x of itr) {
  document.write("<br>" + x);
} //This iterates the array elements through its index value.
