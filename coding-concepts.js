// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------1) What will this log?

const cohort = "Hotel 2023"
// console.log(cohort.split(" "))

// a) Your answer: An array consisting of each letter of Hotel, the space, and each number of 2023 listed as individual strings, separated by commas. 
// b) Verify and explain: The output was ["Hotel", "2023"]. By placing a space in between the quotation marks with the .split(), the string was seprated on spaces in the original string. If .split("") had been used, each letter would be separated. 

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer: "Hello, LEARN Student!"
// b) Verify and explain: The output was undefined because the function does not have the keyword 'return' at the beginning of the return statement (line 20). 

// --------------------3) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer: [11, 13, 15] 
// b) Verify and explain: This is an example of a one-liner using the higher-order function .filter(). The use of .filter() results in a new array consisting of subset of the original array that meets the condition passed through the .filter(). The use of modulo 2 set strictly not equal to 0 returns all odd numbers.  

// --------------------4) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer: JavaScript
// b) Verify and explain: myCodingSkills is an object consisting of four arrays. Using dot notation, we accessed the array "languages". Because "languages" is an array, we can use bracket notation to access the values located at the specified index. By logging languages[0], we access the value in the array at the 0 index resulting in JavaScript. 

// --------------------5) What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Hotel"
    this.year = 2023
  }
}
const learnStudent = new Learn("George")
// console.log(learnStudent)

// a) Your answer: {"George", "Hotel", 2023}
// b) Verify and explain: Correct output --> Learn { student: 'George', cohort: 'Hotel', year: 2023 }
// The output is a new object within in the same class "Learn". An object consists of key:value pairs. In my answer, I did not account for the fact that the class name precedes the new object in the terminal. Additionally, the keys "student", "cohort", and "year" should be in the output.  
