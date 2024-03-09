**split() method**

It splits a string into substring array, then returns that newly created array.

---------------------------

**Syntax**
string.split(separator, limit) 

----------------------------

**The function arguments are discussed as follows.**

- **separator**: _It is an optional parameter. It can be a regular expression or a simple string. It specifies the point where the split should take place._

_If it has multiple characters, then the sequence of the entire character must be found to split._

_If the separator is not present in the given string, or if it is omitted, then the entire string becomes a single array element. In these cases, the returned array contains a single element consisting of the entire string._

_If the separator is present at the beginning or the end of the string, then it still has the effect of splitting. The returned array consists of an empty string of zero length that appears at the beginning or the last position of the returned array._

- **limit**: _It is also an optional parameter. It is a non-negative integer that specifies the number of limits. It defines the higher limit on the number of splits to be found in the given string. If it is given, it splits the string at each occurrence of the specified separator. It stops when the limit entries have been placed in the array._