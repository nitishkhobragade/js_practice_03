It creates a new array carrying sub-array elements concatenated recursively till the specified depth.

**JavaScript Array flat() Method**
The flat() method is an inbuilt array method that flattens a given array into a newly created one-dimensional array. It concatenates all the elements of the given multidimensional array, and flats upto the specified depth. We can specify the depth limit to where we need to flatten the array. By default, the depth limit is 1.

**Syntax**
var newArr=arr.flat(<depth>); 

**Parameters**
**Depth**: It is an optional parameter which specifies the depth to flatten an array. By default, its value is 1.

**Return**
It returns a newly created array containing all the sub-array elements concatenated into it.