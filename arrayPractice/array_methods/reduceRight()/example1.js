////Here's a simple implementation of the Array reduceRight() method.

var arr=[21,2,1,4];  
var calc=arr.reduceRight(function(x,y){  
return (x+y);  
});  
document.write(" The sum of the elements is: " +calc);


////But, it is not clear that reduceRight() method is working from right-to-left or right-to-left in the above example.