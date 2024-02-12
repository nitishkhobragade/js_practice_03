////In this example, we will replace a regular expression without using global search.

var str =
  " Learn Node.js on Javatpoint. Node.js is a well-known JavaScript framework.";
document.write(str.replace(/Node.js/, "React.JS")); //It will replace only first match.
