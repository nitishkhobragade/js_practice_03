**reduceRight()**

It executes a provided function for each value from right to left and reduces the array to a single value.

**JavaScript Array reduceRight() Method**

The reduceRight() method reduces the given array elements into a single value by executing a reducer function. The reducer() function is applied against the accumulator and reduces all the elements from right to left.

**Syntax**-

array.reduceRight(callback(accumulator,currentValue,currentIndex,array),initialValue)

**Parameter**

1. **callback:** It is the callback function that executes over each array element. It undertakes the following arguments:

2. **accumulator:** It accumulates the initialValue or previously returned values by the callback function.
currentValue: It holds the current array element in process.

3. **currentIndex:** It is optional. It holds the current value's index, being in process.

4. **array:** It is optional. It is the source array to which the elements belong.

5. **initialValue:** It is an optional argument which uses its supplied value as an accumulator to the initial calling of the callback function.

**Return**
It reduces a single value as an output.

**Points to note:**

1. When we invoke the callback function for the first time, the accumulator and currentValue can be one of the two values.

2. When we provide the initialValue in the function, the accumulator will hold the value of the initialValue, and currentValue will hold the last element of the array.

3. When no initialValue is supplied, then accumulator will hold the last array element, and currentValue will hold the second-last array element.
When an empty array is present with no initialValue, it will throw an error known as TypeError.

4. When it's an array of one element with no initialValue or an empty array with an initialValue, that element will be returned without invoking the callback function.