// ASSESSMENT 2: Coding Critique with AI

// Enter the following prompt into ChatGPT or similar AI tool.

// Prompt: Create a function that takes in a string and logs the index of the first vowel.

// Copy and paste the code output here.

function findFirstVowelIndex(inputString) {
    const vowels = "AEIOUaeiou";  // Define a string containing all vowels
  
    for (let i = 0; i < inputString.length; i++) {
      const char = inputString[i];
      if (vowels.includes(char)) {
        return i;
      }
    }
  
//     // If no vowel is found, return -1 to indicate that there are no vowels in the string.
    return -1;
  }
  
  
  console.log(findFirstVowelIndex("Hello, world!"))

// Critique the code output. 
// Things to consider in your critique: Were you surprised by the output? Was the output what you expected? Is the correct output being rendered? What do you like about the code? What do you dislike? Are there best practices that are not being followed? Would you take a different approach? What did you learn? 


// I was not surprised that the code from ChatGPT output the correct index for the given string. I like that the code declared a variable including upper and lowercase vowels, used a for loop with <.length to iterate through the string, and used the method .includes() to distinguish where the first vowel was. I did not like the use of the keyword function rather than using the ES6 arrow syntax. Additionally, I did not like the use of the const declaration for the variable "char"; I think a let declaration would be more suitable. Lastly, I did not like the use of a -1 as the "else" output. Instead I would have the function return a string stating that no vowels were found in the input string. Outside of these details, I would have done the same thing. I learned that while ChatGPT can be a good place to start if you are stumped. However the code made by AI should never be copy/pasted without being reviewed as there can likely be imrovements to the code, whether that be implementing up-to-date best practices or making the code more dynamic. 