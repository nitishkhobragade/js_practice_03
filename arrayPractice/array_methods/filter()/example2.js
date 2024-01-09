// Let's see one more array filter() example.

function test(element, index, array) {
  return element >= 25;
}
document.write([21, 32, 21, 43].filter(test));
