//An example to split the sentences into individual words.

var arr = ["This is", , "DjNitish.com"];
var newArr = arr.flatMap((x) => x.split(" "));

document.write(
  "This will split the sentences into individual words: " + newArr,
);

////It is clear in the output that each sentence is seperated from one another and forming individual word.
