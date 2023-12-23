//Array iteration is one of the most important concepts that you will use in JavaScript.

//Let's say we have an array of grades and you'd like to loop (or iterate) over every item in this array. Here's how you do that in JavaScript:

const grades = [10, 8, 13];

grades.forEach(function (grade) {
  ////do something with individual grade
  console.log(grade);
});

////Note : Always start with a console.log() inside your .forEach so that you can visualize the shift from array to array item.

////The .forEach(callback) method allows you to run the callback function for every item in that array. Callbacks will be explained in more depth in the following chapter. For now, let's start with a basic definition.

////A callback is a function definition passed as an argument to another function. In our example above, here's the callback function:

// function (grade) {
//   ////do something with individual grade
//   console.log(grade);
// }

////This callback function receives a grade and then logs it to the console. This is a function definition because it's not being executed. It only defines the behavior of the function. However, this function definition is passed as an argument to the .forEach() method:

// grades.forEach(insert_callback_here);

////Once you combine the two together, as in, pass the function definition as an argument to the .forEach() method, then you get:

// grades.forEach(function(grade) {
//     // do something with individual grade
//     console.log(grade);
// });


// this is the callback
function(grade) {
    console.log(grade);
}
// call the callback with grade = 10 (grades[0])
console.log(grade); // will log 10
// call the callback with grade = 8 (grades[1])
console.log(grade); // will log 8
// call the callback with grade = 13 (grades[2])
console.log(grade); // will log 13