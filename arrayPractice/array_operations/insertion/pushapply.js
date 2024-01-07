//You can append an array to an existing array by using push.apply()

let a = ["1", "2", "3"];
let b = ["4", "5", "6"];

a.push.apply(a, b);

console.log(a);
