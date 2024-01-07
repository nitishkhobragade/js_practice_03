**JavaScript Multidimensional Array**

**Multidimensional arrays are not directly provided in JavaScript. If we want to use anything which acts as a multidimensional array then we need to create a multidimensional array by using another one-dimensional array. So multidimensional arrays in JavaScript is known as arrays inside another array.**

We need to put some arrays inside an array, then the total thing is working like a multidimensional array. The array, in which the other arrays are going to insert, that array is use as the multidimensional array in our code. To define a multidimensional array its exactly the same as defining a normal one-dimensional array. 

**One-Dimensional array:**

let arr = []; // Empty 1D array
let arr1 = ["A", "B", "C", "D"] // 1D array contains some alphabets
let arr1 = [1, 2, 3, 4, 5] // 1D array contains some digits

**Multidimensional-Dimensional array:**

**Method 1:**

1st, need to define some 1D array
let arr1 = ["ABC", 24, 18000];
let arr2 = ["EFG", 30, 30000];
let arr3 = ["IJK", 28, 41000];
let arr4 = ["EFG", 31, 28000];
let arr5 = ["EFG", 29, 35000];
// "salary" defines like a 1D array but it already contains some 1D array
let salary = [arr1, arr2, arr3, arr4, arr5]; 

Here arr1, arr2, …arr5 are some 1D arrays that are inside the salary array.

**Method 2:**

let salary = [
   ["ABC", 24, 18000],
   ["EFG", 30, 30000],
   ["IJK", 28, 41000],
   ["EFG", 31, 28000],
];

Here, the salary array works like a multidimensional array. This notations are known as array literals.

**Accessing the element of the salary array:**

To access the array element we need a simple index-based notation
// This notation access the salary of "ABC" person which is 18000, 
// [0] selects 1st row, and [2] selects the 3rd element
// of that 1st row which is 18000
salary[0][2];

// Similarly, 
salary[3][2]; // Selects 28000

**This notation is used for both Method 1 and Method 2.
For many iteration, we need to use loop to access the elements,**

// This loop is for outer array
for (let i = 0, l1 = salary.length; i < l1; i++) {

    // This loop is for inner-arrays
    for (let j = 0, l2 = salary[i].length; j < l2; j++) {

        // Accessing each elements of inner-array
        documents.write( salary[i][j] ); 
    }
}

**Adding elements in Multidimensional Array:** Adding elements in multi-dimensional arrays can be achieved in two ways in inner array or outer array. The inner array can be done in two different ways.

**Adding elements to inner array:**
- We can use simple square bracket notation to add elements in multidimensional array.

salary[3][3] = "India";

// It adds "India" at the 4th index of 4th sub-array,
// If we print the entire 4th sub-array, document.write(salary[3]);
// the output will be :  ["EFG", 31, 28000, "India"]
// indexing starts from 0

- We can use push() method to add elements in the array.

salary[3].push("India", "Mumbai");

// It add "India" at the 4th index and "Mumbai" at
// 5th index of 4th sub-array
// If we print the entire 4th sub-array,
// document.write(salary[3]);
// The output will be :  ["EFG", 31, 28000, "India", "Mumbai"]
// Indexing starts from 0

- **Adding elements to outer array:** It is much similar to previous methods.

salary.push(["MNO", 29, 33300]);
// This row added after the last row in the "salary" array

Removing elements in Multidimensional Array: We can use pop() methods to remove elements from inner-arrays, and also use pop() method for removing a entire inner array.

// Remove last element from 4th sub-array
// That is 28000 indexing starts from 0
salary[3].pop(); 

// Removes last sub-array
// That is "["EFG", 31, 28000]"
salary.pop();