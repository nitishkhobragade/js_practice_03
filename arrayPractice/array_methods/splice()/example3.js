/////Let's see an example to add two elements to the existing array while removing one element.

var arr = ["Monday", "Tuesday", "Sunday", "Friday"];
var result = arr.splice(2, 1, "Wednesday", "Thursday");
document.write("Updated array: " + arr + "<br>");
document.write("Removed element: " + result);
