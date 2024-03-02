**Difference between String.slice and String.substring in JavaScript**

These 2 functions are quite similar in their Syntax But are different in some cases. Let’s see the difference between them.
JavaScript slice() Method:
This method selects the part of a string and returns the selected part as a new string. Start and end parameters are used to specify the extracted part. The first character starts with index 0. 
Syntax:
str.slice(start, end)

JavaScript substring() Method:
This function has the same syntax as slice() This method selects the part of a string and returns the selected part as a new string. Start and end parameters are used to specify the extracted part. The first character starts with index 0. 
Syntax:
str.substring(start, end)

Common Result Both give the same results in the given cases.
•	If start == stop, both return an empty string
•	If the stop is omitted, both extracts characters till the end of the string
•	If any argument is greater than the string’s length, the string’s length will be used in that case.
JavaScript substring() different results of substring()
1.	If start > stop, then the function swaps both arguments.
2.	If any argument is negative or is NaN, it is treated as 0.
JavaScript slice() different results of slice()
1.	If start > stop, This function will return an empty string. (“”)
2.	If the start is negative, It sets char from the end of the string, like substr().
3.	If stop is negative, It sets stop = string.length – Math.abs(stop) (original value)

