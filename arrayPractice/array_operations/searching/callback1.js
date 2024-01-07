//using find function

let courses = [
  { no: 1, naam: "Nitish" },
  { no: 2, naam: "Tejesh" },
];
console.log(courses);

// console.log(courses.includes ( {no:1, naam: 'Nitish'} )); //gives us false even this is present

//Now Using find method
let course = courses.find(function (course) {
  return course.naam == "Nitish";
});

console.log("using find method");
console.log(course);

//making  arrow function

let course1 = courses.find((course) => course.naam == "Nitish");

console.log("using arrow function");

console.log(course1);
