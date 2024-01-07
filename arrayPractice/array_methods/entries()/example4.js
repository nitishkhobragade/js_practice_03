// Example4: Displaying the position of the candidates in the given array.

function position() {
  var name = ["Tejesh", "Nitish", "Hadrik", "Harry"];
  var itr = name.entries(); //Using entries() method.
  document.write("The positions of each candidate in a sequence are:");
  for (x of itr) {
    document.write(x); //This will display one array element per line with its key.
  }
}

position();
