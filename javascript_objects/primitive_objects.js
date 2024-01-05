//Javascript Primitive  Datatypes
//NN BB SS U
let a = null;
let b = 420;
let c =  true; //can also be false
let d = BigInt("420") + BigInt("10");
let e = "Nitish";
let f = Symbol("I am  a nice symbol");
let g = undefined;

console.log(a, b, c, d, e, f, g);
console.log( typeof a, typeof b, typeof c, typeof d, typeof e, typeof f, typeof g);

// Objects in javascript
const item = {
  "Nitish": true,
  "Shubh": false,
  "Lovish": 67,
  "Rohan": undefined,
}

console.log(item["Rohan"]);