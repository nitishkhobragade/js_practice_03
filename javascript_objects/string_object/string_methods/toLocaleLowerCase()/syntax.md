**JavaScript String toLocaleLowerCase() Method**

It converts the given string into lowercase letter on the basis of host?s current locale.

In an earlier section, we had learnt that a string can be easily converted to lowercase letter using toLowerCase() method. While converting the string to lowercase letter the result may vary due to conflicts between different languages. In Western languages the letter 'i' upper cases to letter 'I' while in Turkish the letter 'i' uppercases to dotted letter '?' . To overcome these problems, we can use toLocaleLowerCase() method.

JavaScript string toLocaleLowerCase() method converts the string to lowercase letter on the basis of host's current locale. In most cases, this method returns the similar result as the toLowerCase() method.

--------------------------

**Syntax**
_The toLocaleLowerCase() method is represented by the following syntax:_

string. toLocaleLowerCase()  

-------------------

**Returns**
A string of lowercase letter on the basis of host's current locale.