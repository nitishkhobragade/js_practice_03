// Example5:

function position() {
  var name = [1, 2, 3, 4, 5, 6, 7, 8, 8, 9];
  var itr = name.entries(); //Using entries() method.
  document.write("The positions of each number in a sequence are:  ");
  for (x of itr) {
    document.write(x); //This will display one array element per line with its key.
  }
}

position();
