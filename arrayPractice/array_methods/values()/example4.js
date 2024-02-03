//////Note: If the next() method use exceeds the given array length, it will return an 'undefined' value.

var arr = ["John", "Tom", "Sheero", "Romy", "Tomy"]; //Initialized array
var itr = arr.values();
document.write("The array elements are: <br>");
document.write("<br>" + itr.next().value); //returns value at index 0.
document.write("<br>" + itr.next().value); //returns value at index 1
document.write("<br>" + itr.next().value); //returns value at index 2
document.write("<br>" + itr.next().value); //returns value at index 3
document.write("<br>" + itr.next().value); //returns value at index 4
document.write("<br>" + itr.next().value); //returns undefined

////It is clear that the size of the array was 4, i.e., arr[4]. But next() method was used for 5 times. Thus, the last call to next() had returned an 'undefined' value.

////Note: The array iterator object carries the array address as its value, and thus depends on the values present in the array, respectively.
