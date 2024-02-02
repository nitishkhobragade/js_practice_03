////Testing if any array element contains the same match.

var arr = ["John", "Tom", "James", "Sheero"]; // An array is defined
function ismatching(arr) {
  return arr == "Sheero";
} //It matches if any element in the array is equal to Sheero.

var chk = arr.some(ismatching);
console.log("Yes, " + chk + ". One match found.");
