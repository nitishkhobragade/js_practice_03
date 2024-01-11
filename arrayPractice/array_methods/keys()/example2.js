////Implementing keys() method with holes in between the array.

var arr = ["Mon", "Tue", "Wed", , "Fri"]; //A hole is present in-between the elements.
var itr = arr.keys();
document.write(itr + "<br>");
for (let key of itr) document.write(key + "<br>");

////Note: It is clear from the above example that Array keys() method does not ignore the holes present as an array element in the given array. It assigns a key value to that empty hole too. Also, the keys are assigned in an increasing order sequence to each element.
