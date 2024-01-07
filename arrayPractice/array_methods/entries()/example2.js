// Example2: This example represents the array entries() method through let declaration.

 var arr=['John','Michael','Embrose','Herry','Lewis']; // array elements  
  var itr=arr.entries();  
  document.write("After applying the entries method:");  

  for(let e of itr) // let declares a variable, but its scope is within the block.  
  {  
      // document.write(e+"</br>"); 
      document.write(e); 
  }  