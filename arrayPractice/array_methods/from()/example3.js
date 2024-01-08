////Here's an example to convert a given Set into an array.

var set = new Set(['C','C++','Java','C','Java','C++','Python','Perl']); //A set of different values.  

console.log(set) ;

let a = Array.from(set);
document.write(a); //Using from() will convert the given set into an array.

////In the output, we can see that each value occurred only once.

////Note: A set is a collection of values that occur only once in the resultant/output. Such behavior maintains the uniqueness of each value present in the set.