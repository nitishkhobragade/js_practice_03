////Implementing the above example on the console.

const arr = [1, 'a', new Date('08 Jan 1997 17:12:00 UTC')];  
const str = arr.toLocaleString('en', {timeZone: "UTC"}); //UTC is the Coordinated Universal Time.  
console.log("The converted array elements in string form are: "+str); //on console 