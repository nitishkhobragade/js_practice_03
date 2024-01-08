flatMap()
It maps all array elements via mapping function, then flattens the result into a new array.

**JavaScript Array flatMap() Method**
The flatMap() method is a combination of flat() and map() methods. This method initially maps each array element through a mapping function, then flatten up the array with depth value as 1.

**Syntax**

var newArr=arr.flatMap(function callback(currentValue[ , index[ , array]])  

return element  
} [ , thisArg])  
++++++++++++++++++
**Parameters**
**callback**- It is a function which produces an element for the newly created array and carries the following three arguments:

1. **currentValue**: It is the current array element that is in processing.
2. **index**: It is the index value of the current array element in process. It is an optional argument.
3. **array:** It is an optional argument where the array map is called upon.
4. **thisArg:** It is also an optional argument whose value is used as 'this' when we execute the callback function.

**Return**
It returns a new array where each element is the result of the callback function.