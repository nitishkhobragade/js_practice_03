// Example3: This example displays the (key,value) pairs of the array by clicking on the "apply" button.

function arr() {
  var name = ["Tejesh", "Nitish", "Hadrik", "Harry"];
  var itr = name.entries(); //Using entries() method.
  document.write("After applying the entries method:");
  for (x of itr) {
    document.write(x); //This will display one array                 element per line.
  }
}

arr();
