////Here's an implementation which weshows the working direction of the reduceRight() method.

var arr=['t','p','i','r','c','s','a','v','a','j'];  
var res=arr.reduceRight(function(right, left){  
return (right+left);  
});  
document.write(" Output is: " +res); 

////Thus, it is clear from the above output that reduceRight() works from right-to-left.



