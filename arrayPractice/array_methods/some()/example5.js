////We can also implement the above example using Arrow function.

var arr = [2, 3, 4, 6, 9]; //Defining array elements
var check = (element) => element % 2 === 0;
console.log("Yes found. So, it should be ");
console.log(arr.some(check));

