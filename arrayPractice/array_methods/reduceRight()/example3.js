////Although both reduceRight() and reduce() methods reduce the array elements into a single value, there is a difference between them. The reduce() method reduces the array elements from the left index position to the right. On the other hand, the reduceRight() method reduces the array elements from the right index position towards left.

var arr = ["t", "p", "i", "r", "c", "s", "a", "v", "a", "j"];
var res1 = arr.reduceRight(function (pos1, pos2) {
  return pos1 + pos2;
});
var res2 = arr.reduce(function (pos1, pos2) {
  return pos1 + pos2;
});
document.write(" The reduceRight() method output is: " + res1 + "<br>");
document.write("<br> The reduce() method output is: " + res2 + "<br>");
document.write(
  "<br> <center>The above outputs shows that both method works in different manners<center>",
);
