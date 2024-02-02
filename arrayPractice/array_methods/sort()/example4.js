////Let's see an example to arrange the elements in descending order using function.

var arr = [2, 4, 1, 8, 5];
var result = arr.sort(function compare(a, b) {
  return b - a;
});

document.write(result);
