--------------------------

**String split() Method Syntax:**

str.split(separator, limit);

--------------------------

- **separator**: _It is used to specify the character, or the regular expression, to use for splitting the string. If the separator is unspecified then the entire string becomes one single array element. The same also happens when the separator is not present in the string. If the separator is an empty string (“”) then every character of the string is separated._

  
- **limit**: _Defines the upper limit on the number of splits to be found in the given string. If the string remains unchecked after the limit is reached then it is not reported in the array._
  
**Return value:**
_This function returns an array of strings that is formed after splitting the given string at each point where the separator occurs._ 