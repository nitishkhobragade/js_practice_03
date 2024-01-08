//This example shows the name of the fruit which each member likes.

var arr = ["Tejesh", "Nitish", "Mary", "Renzo"];
var arr1 = ["Apple", "Pineapple", "Guava", "Grapes"];

document.write(
  "The resultant will display the fruits liked by each person <br>",
);

var newArr = arr.flatMap((arr, index) => [arr, arr1[index]]);
document.write("<br>" + newArr);
