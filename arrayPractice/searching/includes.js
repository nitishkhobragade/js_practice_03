//Array.includes()

//The includes() method determines whether an array includes a certain value and returns true or false as appropriate.

let array = [10, 11, 3, 20, 5];

const includesTwenty = array.includes(20);

console.log(includesTwenty); //true

//This method accepts a value rather than a callback as the argument. Here's the syntax for the includes method:

//const includesValue = array.includes(valueToFind, fromIndex)

//Where

//valueToFind is the value you are checking for in the array (required), and
//fromIndex is the index or position in the array that you want to start searching for the element from (optional)

const includesTenTwice = array.includes(10, 1);

console.log(includesTenTwice)//false