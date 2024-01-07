// Example 6: Below is the example.

// Prints a simple multidimensional array in
// JavaScript where we remove a single element
// and a entire sub-array
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

console.log("After removing last element " + "of last inner array :");

// Removes the last element of 3rd sub-array
salary[3].pop();

for (let i = 0; i < salary.length; i++) {
  console.log(salary[i] + "");
}

console.log("After removing last inner array :");

// Removes last sub-array
salary.pop();

for (let i = 0; i < salary.length; i++) {
  console.log(salary[i]);
}
