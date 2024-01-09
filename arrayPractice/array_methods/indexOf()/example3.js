/////Here, we will search an element which is not present in an array.

////This JavaScript code uses the indexOf method to find the index of the first occurrence of the string "JavaScript" in the array arr. Let's break down the code:

var arr = ["C", "C++", "Python", "C++", "Java"];
var result = arr.indexOf("JavaScript");
document.write(result);

// Here's an explanation of each part of the code:

// var arr = ["C", "C++", "Python", "C++", "Java"];: Creates an array named arr containing five strings: "C", "C++", "Python", "C++", and "Java".

// var result = arr.indexOf("JavaScript");: Uses the indexOf method on the array arr to find the index of the first occurrence of the specified value ("JavaScript"). The indexOf method returns the index of the first occurrence of the specified element in the array, or -1 if the element is not found. This result is stored in the variable result.

// In this case, the array does not contain the string "JavaScript," so the indexOf method will return -1.

// document.write(result);: Writes the value of result to the document using document.write.

// So, the output of this specific example will be -1 because "JavaScript" is not found in the array arr. If the specified value is not present in the array, the indexOf method returns -1.
