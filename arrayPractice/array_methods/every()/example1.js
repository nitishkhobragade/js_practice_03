// JavaScript Array every() method example
// Let's see some examples of every() method.

// Example 1
// Let's check the marks of a student.

var marks = [50, 40, 45, 37, 20];

function check(value) {
  return value > 30; //return false, as marks[4]=20
}

document.write(marks.every(check));
