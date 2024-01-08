// Using flatMap() method with two different array elements.

var arr1 = ["a", "b", "c", "d"];
var arr2 = [1, 2, 3, 4];
var newArr = arr1.flatMap((arr1, index) => [arr1, arr2[index]]); //It will map and flatten arr1 and arr2.
//does not affect old array
document.write("After applying the method <br>" + newArr);
