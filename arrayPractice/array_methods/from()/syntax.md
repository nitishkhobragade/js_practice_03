**from()**
It creates a new array carrying the exact copy of another array element.

**JavaScript Array from() Method**
The **from()** method creates a new array that holds the shallow copy from an array or iterable object. When applied to a string, each word gets converted to an array element in the new array.

**Syntax**
There is a following possible syntax:

Array.from(object,map_fun,thisArg);

+++++++++
**Parameter**

1. **object:** It is the name of the array-like or iterable object on which from() method will be applied.

2. **map_fun:** It is an optional parameter used for calling the elements of the array via map() function.

3. **thisArg:** An optional parameter whose value is used as 'this' when we execute the map_fun.
   
**Return**
It returns a newly created array.


_**Note:** Array from() method allows to create a new array from an array-like object, specified with a length property and indexed elements. The length property of the from() method is 1 usually._