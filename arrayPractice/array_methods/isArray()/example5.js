////Determining the object value and invoking the functions accordingly.

var arr = [10, 20, 40, 50]; //An integer array.
function f1() {
  document.write("arr is forming an array i.e., <br>" + arr);
}
function f2() {
  document.write("arr does not form any array. <br>");
}
if (Array.isArray(arr)) f1();
else f2();

////output - Function f1() is invoked because the value passed is an array.
