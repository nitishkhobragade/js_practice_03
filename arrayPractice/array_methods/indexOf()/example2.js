////In this example, we will provide the index value from where the search starts.

////This JavaScript code is using the indexOf method with a starting index to find the index of the first occurrence of the string "C++" in the array arr, starting the search from index 2. Let's break down the code:

var arr = ["C", "C++", "Python", "C++", "Java"];
var result = arr.indexOf("C++", 2);
document.write(result);

// Here's an explanation of each part of the code:

// var arr = ["C", "C++", "Python", "C++", "Java"];: Creates an array named arr containing five strings: "C", "C++", "Python", "C++", and "Java".

// var result = arr.indexOf("C++", 2);: Uses the indexOf method on the array arr to find the index of the first occurrence of the specified value ("C++"), starting the search from the specified index (2). The indexOf method returns the index of the first occurrence of the specified element in the array, or -1 if the element is not found. This result is stored in the variable result.

// In this case, the search starts from index 2, and the first occurrence of "C++" found after index 2 is at index 3. Therefore, result will be assigned the value 3.

// document.writeln(result);: Writes the value of result to the document using document.writeln.

// So, the output of this specific example will be 3 because the first occurrence of "C++" after index 2 is at index 3 in the array arr. If "C++" was not found after index 2, the output would be -1.
