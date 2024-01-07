// Example 2
// In this example, we will test whether the number of elements present in an array are satisfying the specified value.

function test(element, index, array) {
  return index < 4;
}
document.write([21, 32, 2, 43].every(test)); //true
document.write([21, 32, 2, 43, 35].every(test)); //false
