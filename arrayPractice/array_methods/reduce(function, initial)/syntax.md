**reduce(function, initial)**

It executes a provided function for each value from left to right and reduces the array to a single value.


**JavaScript Array reduce() Method**

The reduce() method reduces the given array into a single value by executing a reducer function. The user implements the reducer function that works on every element present in the array.

**Reducer Function**

The reducer function is the user implemented code. It uses the following four arguments to perform its task:

**1. Accumulator:** It accumulates the return values of the array.
**2. Current Value:** Current element is the current value.
**3. Current Index:** The index of the current element is the value of the current index.
**4. Source array:** The array defined by the user for implementing reduce() method.

**Syntax :**

arr.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue)    


**Parameter**

**callback:** The main is the callback function that executes for each element, excluding the first, if no initialValue is specified.

_The callback function undertakes the following four arguments:_

**1. accumulator:** It accumulates the return values of the callback function, returned in the last calling of the function.

**2. currentValue:** It is the value of the current element, which is being processing.

**3. currentIndex:** It is an optional argument that holds the index value of the current element which is being processed. If we provide the initia l value, indexing will begin from 0. Else from 1.

**4. array:** It is also optional, which carries the elements on which the reduce() will work.

_**initialValue:** It is the first argument value used in the first invocation of the callback function._

**Return**
It returns a single value as an output.

**Points to note:**

1. If we do not provide the initial value, the callback function will start its execution with index as 1, where it will skip the first index. Although, if intialValue is provided, execution will begin from 0.

2. In case of an empty array with no initialValue is supplied, it will throw a TypeError.

3. If the array is empty, but initialValue is provided, or if the array contains one element, but no initialValue is supplied, that element will return without invoking the callback function.
Thus, it is safe and good to provide the initial value.

