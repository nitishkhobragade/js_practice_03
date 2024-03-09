////Here, we are defining the limit parameter and using the letter 'o' as the separator of the given string. The split() function will create an array of strings by splitting the given string wherever the given letter 'o' occurs until the limit is reached.

////The limit parameter limits the number of splits to 2 because we are defining 2 as the value of the limit. In the output, we can see that the splitting only happens twice.

var str = 'Welcome to the javaTpoint.com'  
var arr = str.split("o", 2);  
document.write(arr);  