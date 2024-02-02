////Let's see an example to arrange the elements in ascending order using function.

var arr = [2, 4, 1, 8, 5];
var result = arr.sort(function compare(a, b) {
  return a - b;
});

document.write(result);
