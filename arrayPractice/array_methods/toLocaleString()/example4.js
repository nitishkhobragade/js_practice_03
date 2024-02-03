////Implementing an example that combines the array elements and a value together into a new array.

var arr = ["John", "Tom", "Mary", "Herry", "Sheero"]; //Defining an array
var val = 5; //Intializing the value of val.
var netarr = [arr, val]; //Creating a new array that combines both initialized variables.
var str = netarr.toLocaleString(); //Using the method
document.write("The netarr gets converted into string as: " + str);
