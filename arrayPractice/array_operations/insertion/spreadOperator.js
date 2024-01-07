//The spread operator (...) (ES6)

//With the ES6 syntax, we can use the spread operator. It is similar to concat where we create a new array instead of adding to the existing one.

//this is cloning also
let a = ["1", "2", "3"];

let newArray = ["0", ...a, "4"];
console.log("in this method it will clone main array to another");
console.log(a);
console.log(newArray);

// lets take another example (not cloning)

let p = ["1", "2", "3"];
let q = ["4", "5"];

p.push(...q);

console.log("in 2nd method it will directly push into main array");
console.log(p);
