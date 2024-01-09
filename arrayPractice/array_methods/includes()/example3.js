////Let's see one more example to determine whether the includes() method is case-sensitive.

var arr = ["AngularJS", "Node.js", "JQuery"];
var result = arr.includes("angularjs");
document.write(result);

///Here's an explanation of each part of the code:

// var arr = ["AngularJS", "Node.js", "JQuery"];: Creates an array named arr containing three strings: "AngularJS", "Node.js", and "JQuery".

// var result = arr.includes("angularjs");: Uses the includes method on the array arr to check whether it includes the specified value ("angularjs"). The includes method performs a case-sensitive search and returns a boolean (true if the element is found, and false otherwise). This result is stored in the variable result.

// In this case, since the array contains "AngularJS" (with capital letters) and the search string is "angularjs" (with lowercase letters), the includes method will return false.

// document.write(result);: Writes the value of result to the document using document.write.

// So, the output of this specific example will be false because the search for "angularjs" is case-sensitive, and it does not match the case of "AngularJS" in the array. If you want a case-insensitive search, you might need to convert both the search string and the array elements to the same case (e.g., by using toLowerCase() or toUpperCase()).
