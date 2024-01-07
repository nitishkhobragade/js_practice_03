// Example 4: Below is the example.

// Prints a simple multidimensional array in
// JavaScript where we add elements in the array
// using simple square bracket and push() method
let salary = [
  ["ABC", 24, 18000],
  ["EFG", 30, 30000],
  ["IJK", 28, 41000],
  ["EFG", 31, 28000],
];

// Prints first array
console.log("Original array :<br>");
for (let i = 0; i < salary.length; i++) {
  console.log(salary[i]);
}

// Adding "India" at the 4th index of 4th sub array
salary[3][3] = "India";

console.log('<br>after adding "India" at the 4th array :<br>');
for (let i = 0; i < salary.length; i++) {
  console.log(salary[i]);
}

console.log(
  '<br>after adding "USA" and "Canada" ' +
    'at the 3rd array using "push()" method :',
);
salary[2].push("USA", "Canada");

// Adding "USA" and "Canada" in the 2nd sub-array
for (let i = 0; i < salary.length; i++) {
  console.log(salary[i]);
}
