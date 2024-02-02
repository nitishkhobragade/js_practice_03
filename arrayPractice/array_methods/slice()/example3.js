////In this example, we will provide the negative values as index to extract elements.

var arr = ["ReactJS", "Node.js", "JQuery", "Bootstrap"];
var result = arr.slice(-4, -1);
document.write(result);

// In this example:

// The startIndex is -4, which means counting from the end of the array, starting from the fourth element from the end.
// The endIndex is -1, which means counting from the end of the array, stopping before the first element from the end.
// Therefore, the extracted portion will include elements from the fourth element from the end to the second element from the end. The result is assigned to the variable result.

// If we break down the extraction:

// The fourth element from the end is "ReactJS".
// The third element from the end is "Node.js".
// The second element from the end is "JQuery".
// So, the result array will contain these elements: ["ReactJS", "Node.js", "JQuery"]. The document.write(result) statement will output these elements to the document.
