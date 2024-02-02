////Let's see an example to add an element to the existing array while removing other elements.

var arr = ["Monday", "Tuesday", "Saturday", "Sunday", "Thursday", "Friday"];
var result = arr.splice(2, 2, "Wednesday");
document.write("Updated array: " + arr + "<br>");
document.write("Removed element: " + result);
