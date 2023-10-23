// ASSESSMENT 2: Coding Practical Questions with Jest

const { string } = require("yargs")

// Please read all questions thoroughly
// If you get stuck, leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

// Pseudo code:

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

const object1 = { number: 15 }
// Expected output: "15 is divisible by three"

// describe("divisibleBy3", ()=>{
//     it("takes a object as an argument and decides if the number inside it is evenly divisible by three or not", ()=>{
//         expect(divisibleBy3({ number: 15 })).toEqual("15 is divisible by three")
// })
// })
// const object2 = { number: 0 }
// // Expected output: "0 is divisible by three"

// describe("divisibleBy3", ()=>{
//     it("takes a object as an argument and decides if the number inside it is evenly divisible by three or not", ()=>{
//         expect(divisibleBy3({ number: 0 })).toEqual("0 is divisible by three")
// })
// })
// const object3 = { number: -7 }

// describe("divisibleBy3", ()=>{
//     it("takes a object as an argument and decides if the number inside it is evenly divisible by three or not", ()=>{
//         expect(divisibleBy3({ number: -7 })).toEqual("-7 is not divisible by three")
// })
// })
// Expected output: "-7 is not divisible by three"

// b) Create the function that makes the test pass.

// Pseudo code:

// 1. Declare function "divisibleBy3" 
// const divisibleBy3 = (object) => {
//  // 2. Use a conditional with different return values depending if the input number is divisible by 3
//     if(object.number % 3 === 0){
//         return `${object.number} is divisible by three`
//  // 3. Use string interpolation and dot notation to have the input number in the output string
//     } 
//     else{
//         return `${object.number} is not divisible by three`
//     }
// }
// console.log(divisibleBy3(object1))

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]

// describe("initialCase", ()=>{
//     it("takes in an array of words and returns an array with all the words capitalized.", ()=>{
//         expect(initialCase(["streetlamp", "potato", "teeth", "conclusion", "nephew"])).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
// })
// })
// const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// // Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

// describe("initialCase", ()=>{
//     it("takes in an array of words and returns an array with all the words capitalized.", ()=>{
//         expect(initialCase(["temperature", "database", "chopsticks", "mango"])).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
// })
// })


// b) Create the function that makes the test pass.

// 1. Declare the function initialCase to take in an array
const initialCase = (array) => {
 // 2. Use the .map method to iterate through each element in the array
    return array.map((value) =>{
        return value[0].toUpperCase() + value.substring(1)
// 3. Use .toUpperCase and bracket notation to capitalize first letter of each string
// 4. Use concatenation and .substring() to combine the capitalized letter with remainder of the word
    })
}

console.log(initialCase(randomNouns1))

// Pseudo code: