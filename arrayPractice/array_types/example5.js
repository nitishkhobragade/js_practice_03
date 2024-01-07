// Example 5: Below is the example.

// Prints a simple multidimensional array in
// JavaScript where we add a new inner array
let salary = [
  ["ABC", 24, 18000],
  ["EFG", 30, 30000],
  ["IJK", 28, 41000],
  ["EFG", 31, 28000],
];

// Prints first array
console.log("Original array :");

for (let i = 0; i < salary.length; i++) {
  console.log(salary[i]);
}

console.log("After adding a new inner array :");

// Pushing a new sub-array
salary.push(["MNO", 29, 33300]);

for (let i = 0; i < salary.length; i++) {
  console.log(salary[i]);
}
