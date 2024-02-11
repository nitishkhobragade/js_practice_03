////Let's see one more example to search for a regular expression using global flag. As match() method is case-sensitive, it return null in this case.

var str="JavaScript";  
document.write(str.match(/java/g));  

////returns null