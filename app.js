// This is an ARRAY of OBJECTS
// Remember that an object is just a data structure with KEY:VALUE pairs
// This allows us to combine multiple types of data into a single variable

let students = [
  {
    firstName: "B'Elanna",
    lastName: "Torres",
    gpa: 3.7,
  },
  {
    firstName: "Chancellor",
    lastName: "Gorkon",
    gpa: 4.0,
  },
  {
    firstName: "Alexander",
    lastName: "Rozhenko",
    gpa: 3.2,
  },
];

console.log(students); // ALL the student objects in the array
console.log(students[0]); // Only a SINGLE student object in the array

// Because this is an ARRAY, we can use higher order array methods on it
// Remember that these methods utilize callback functions as arguments!

// MAP
// this is used to take an array and create a new array from it
// with elements of that array that have been changed or modified in some way

let fullNames = students.map(function (student) {
  //console.log(student); // when learning these methods, it is helpful to use console logs
  // to explore each element of an array as the method iterates through it
  return student.firstName + " " + student.lastName;
});

console.log(fullNames);

// FILTER
// this is used to take an array and create a new array from it
// it only returns certain elements based on conditions defined in the callback

// this filter should remove Alexander Rozhenko since his GPA is less than 3.5
let gpasGreaterThan3Point5 = students.filter(function (student) {
  if (student.gpa > 3.5) {
    return true;
  } else {
    return false;
  }
});

console.log(gpasGreaterThan3Point5);

// REDUCE
// this is used to take an array and return a SINGLE VALUE
// we can use this to simplify mathematical operations on sets of data with numbers

// In this example, we can find the average GPA of our students
// by dividing the RESULT of a reduce operation by the number of students in the array
let averageGPA =
  students.reduce(function (total, student) {
    console.log(total);
    return total + student.gpa;
  }, 0) / students.length;

//! NOTE: The second argument of the reduce method is an OPTIONAL initial value of the accumulator
//! If this is not set, the initial value of the accumulator is the first element of the array
console.log(averageGPA);
