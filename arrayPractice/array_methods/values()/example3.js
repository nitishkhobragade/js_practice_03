////An example implemented using next() method.

var arr = ["John", "Tom", "Sheero", "Romy", "Tomy"]; //Initialized array
var itr = arr.values();
document.write("The array elements are: <br>");
document.write("<br>" + itr.next().value);
document.write("<br>" + itr.next().value);
document.write("<br>" + itr.next().value);
document.write("<br>" + itr.next().value);
document.write("<br>" + itr.next().value);


