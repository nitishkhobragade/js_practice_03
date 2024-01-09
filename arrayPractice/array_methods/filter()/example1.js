// Let's see a simple filter() example to filter the marks of a student.

var marks = [50, 40, 45, 37, 20, 29, 30];

function check(value) {
  return value > 30;
}

document.write(marks.filter(check));
