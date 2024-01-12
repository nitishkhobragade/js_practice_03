/////Here, map() method returns every element of given array by multiplying it by 3.

var arr=[2,4,6];  
var result=arr.map(x=>x*2);  
document.write(result);



// Certainly! Let's break down the code step by step:

// ```javascript
// var arr = [2, 4, 6];
// ```
// This line creates an array `arr` with three elements: 2, 4, and 6.

// ```javascript
// var result = arr.map(x => x * 2);
// ```
// Here, the `map` function is used on the array `arr`. The `map` function applies a provided function to each element of the array and returns a new array with the results.

// In this case, the arrow function `x => x * 2` is applied to each element `x` in the array. It multiplies each element by 2. So, the resulting `result` array will be `[4, 8, 12]`.

// ```javascript
// document.write(result);
// ```
// The `document.write` method is used to write the contents of the `result` array to the document. In this case, it will write "4,8,12" to the document.

// So, when you run this code, you'll see the output "4,8,12" on the document.