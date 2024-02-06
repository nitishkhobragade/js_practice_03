**JavaScript String lastIndexOf() method**

It provides the position of a char value present in the given string by searching a character from the last position.

The JavaScript string lastIndexOf() method is used to search the position of a particular character or string in a sequence of given char values. It behaves similar to indexOf() method with a difference that it start searching an element from the last position of the string.

The lastIndexOf() method is case-sensitive. The index position of first character in a string is always starts with zero. If an element is not present in a string, it returns -1.

---------------------------
**Syntax**
_These are the following ways used to search the position of an element._

**Method - Description**

- **lastIndexOf(ch)**	- _It returns the last index position of char value passed with method._
  
- **lastIndexOf(ch,index)**	- _It starts searching the element from the provided index value in the inverse order and then returns the index position of specified char value._
  
- **lastIndexOf(str)**	- _It returns the index position of first character of string passed with method._
  
- **lastIndexOf(str,index)**	- _It starts searching the element from the provided index value and then returns the index position of first character of string._
------------------------------
**Parameters**
- **ch** - It represent the single character to search like 'a'.

- **index** - It represent the index position from where search starts.

- **str** - It represent the string to search like "Java".