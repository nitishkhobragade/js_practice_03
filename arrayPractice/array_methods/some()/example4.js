////Checking whether any array element is found even.

var arr = [2, 3, 4, 6, 9]; //Defining array elements
function check(arr) {
  return arr % 2 === 0;
} //This function checks if any element is even or not
var test = arr.some(check);
console.log("Yes," + test);
