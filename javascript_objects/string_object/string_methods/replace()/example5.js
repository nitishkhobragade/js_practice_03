/////We can ignore case-sensitive behaviour of replace() method by using ignore flag modifier. Let's understand with the help of example:

var str =
  " Learn Node.js on Javatpoint. Node.js is a well-known JavaScript framework.";
document.write(str.replace(/Node.JS/gi, "ReactJS"));
