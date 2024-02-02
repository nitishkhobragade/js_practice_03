////Let's see an example to add an element to the existing array without removing other elements.

var arr = ["Monday", "Tuesday", "Thursday", "Friday"];
var result = arr.splice(2, 0, "Wednesday");
document.write(arr);
