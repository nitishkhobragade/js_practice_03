////Here's an example that implements date() method with toLocaleMethod().

const arr = [1, "a", new Date("08 Jan 1997 17:12:00 UTC")];
const str = arr.toLocaleString("en", { timeZone: "UTC" }); //UTC is the Coordinated Universal Time.
document.write("original array is " + str);

document.write("The converted array elements in string form are: " + str);
