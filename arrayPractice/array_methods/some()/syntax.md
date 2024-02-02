**some() method**
It determines if any element of the array passes the test of the implemented function.

The some() methods perform testing and checks if atleast a single array element passes the test, implemented by the provided function. If the test is passed, it returns true. Else, returns false.

**_Note: If some() method is applied on an empty array, it returns false always._**

-------------------

**Syntax**
array.some(callback_funct(element, index, array), thisArg);

-------------------

**Parameter**
**callback_funct:** It is the function that tests each element present in the array. It undertakes the following three arguments:

**element**: It is the current element, being in process.
index: Although it is optional, it is the index value of the current element in process.

**arr:** It is the given array on which some() method performs the test.

**thisArg:** It is an optional parameter, used as 'this' value while executing the callback function. If we do not provide, 'undefined' will be used as 'this' value.

**Return**
It returns a boolean value. If it founds an element returning true value to the callback function, it returns true. Otherwise, false.

**_Note: The array.some() does not affect the original array._**


**_Points to note:_**

- Before the first calling of function, it is required to set the range of the elements to implement some() method.

- The callback function will not visit those elements added after invoking some() method.

- It does not work on the deleted array elements.

- If the callback function changes an existing and unchanged element, the value gets defined to the array.


_**Note:** If some() method finds the element matching the implemented condition of the callback function at first attempt, then it stops its search and returns Boolean true. It does not traverse for each element in that case._