// My assignment is to solve the questions with the knowledge... 
// I have before I find the answers. 
// I will comment out what I think is the answer above every question, 
// and below each question I will comment out the correct answer with an asterisk.
// I thought it would only make sense to answer these questions that pertain to JavaScript in my main.js file!
// Variable type questions.
Determine what variable type each one is:
// My Answer: I think testOne is a string variable?
var testOne = "What kind of variable is this?";
// Correct Answer: testOne is indeed a string variable
// My Answer: testTwo is a number variable.
var testTwo = 256;
// Correct Answer: testTwo is a number variable like I surmised.
// My Answer: testThree is an array variable with a collection of strings.
var testThree = ["What", "kind", "of", "variable", "am", "I?"];
// Correct Answer: testThree is definitely an array variable with a collection of strings.
// My Answer: I believe var testFour is a Boolean variable.
var testFour = false;
// Correct Answer: var testFour is a Boolean variable
// My Answer: var testFive is an array variable with a collection of numbers.
var testFive = [1, 2, 5];
// Correct Answer: var testFive is for sure an array variable with a collection of numbers.
// My Answer: var testSix is a number variable.
var testSix = 128;
// Correct Answer: I was right! var testSix is indeed a number variable.
// My Answer: var testSeven is a string variable.
var testSeven = "What am I?"
// Correct Answer: I was right!
// My Answer: var testEight is an example of a Boolean variable.
var testEight = true;
// Correct Answer: I was right again!
// My Answer: var testNine is a array variable with a combination of string and numbers.
var testNine = ["What kind of variable is this?", 2, 5, 19];
// Correct Answer: Yup, I got that right too!
// Concatenation questions.
Concatenation (combining things in JavaScript):
Given these variables
var string1 = "Hello "; 
var string2 = "my name is "; 
var string3 = "your name here"; 
var combinedStrings = string1 + string2 + string3;
// My Answer: I expect the console message to read "Hello my name is your name here"
What do you expect the console message to be?
console.log(combinedStrings);
// Correct Answer: Ihad everything right, except the message won't be in quotes like I had it written.
// The correct answer is 
Given these variables
var num1 = 8; 
var num2 = 52; 
var num3 = 60; 
var combinedNumbers = num1 + num2 + num3;
// My Answer: I expect the answer to be 120.
What do you expect the console message to be?
console.log(combinedNumbers);
// Correct Answer: I was correct.
Given these variables
var mixedNum1 = 10; 
var mixedString1 = "ten"; 
var mixedNum2 = "10"; 
var mixedConcatenation = mixedNum1 + mixedNum2 + mixedString1;
// I expect the message for the mixedConcatenation to be "10ten10"
What do you expect the console message to be?
// Correct Answer: 1010ten.I mixed up the order and wrongly put my answer in quotes.
console.log(mixedConcatenation);
// If/Else If/Else questions.
If / Else If / Else - Checking for True or False
Given these variables
var num4 = 5; 
var num5 = 0;
// I expect the console message to read true
What do you expect the console message to be?
if (num4 > 1) { 
console.log("Num4 is greater than 1"); 
} else { 
console.log("Num4 is NOT greater than 1"); 
};
// Correct Answer: Num4 is greater than 1
Given these variables
var num4 = 5; 
var num5 = 0;
// I expect the if statement to run false and the else statement to run false.
What do you expect the console message to be?
if (num4 < num5 || num4 === num5 && true) { 
console.log("If statement ran!"); 
} else { 
console.log("Else statement ran"); 
};
// Correct Answer: Else statement ran
Given these variables
var num4 = 5; 
var num5 = 0;
// I expect the if statement to run false, the else if statement to run false,
// and the else statement to run true.
What do you expect the console message to be?
if (num4 < num5 || num4 === num5) { 
console.log("If statement ran!"); 
} else if (num5 === "0" || true) { 
console.log("Else if statement ran"); 
} else { 
console.log("Else statement ran"); 
};
// Else if statement ran
Given these variables
var num4 = 5; 
var num5 = 0;
// I expect the if statement to run false, the else if statement to run false,
// and the else statement to run false.
What do you expect the console message to be?
if (num4 > num5 && num4 === num5) { 
console.log("If statement ran!"); 
} else if (num5 === "0" || true) { 
console.log("Else if statement ran"); 
} else { 
console.log("Else statement ran"); 
};
// Correct Answer: Else if statement ran
// Loops
// Loops are new to me, so some of my answers might be way off! But I will try my best and make educated guesses.
For Loop - Looking into Arrays
Given this variable
var array1 = ["this", "is", "an", "array", "of", "strings"];
// I expect the console message to read "is an array of"
What do you expect the console message to be?
for (var i = 0; i < array1.length; i = i + 1) { 
console.log(i, array1[i]); 
};
// Correct Answer: 0 "this" 1 "is" 2 "an" 3 "array" 4 "of" 5 "strings"
Given these variables
var array2 = [1, 3, 5, 7, 9]; 
var total = 0;
// I think the total will be 16
What do you expect the console message to be?
for (var i = 0; i < array2.length; i = i + 1) { 
total = total + array2[i]; 
}; 
console.log(total);
// Correct Answer: 25
Given this variable
var array3 = [11, 33, 55, 77, 99];
// 77? Haha I don't know?! This is hard for me with no experience in loops!
What do you expect the console message to be?
for (var i = 0; i < array3.length; i = i + 1) { 
if(array3[i] >= 55 || array3[i] <= 100){ 
console.log(array3, array3[i]); 
	}; 
};
// Correct Answer: Array(5) 11, Array (5) 33, Array (5) 55, Array (5) 77, Array (5) 99... I was way off!
// Functions... I don't have any experience with this either, but I will get better at functions!
Functions - making things happen
Given this function
function testStuff (a, b) { 
if(a > 25 && b < 100){ 
console.log(a + " is greater than 25 and " + b + "is less than 100"); 
} else { 
console.log(a + " is NOT greater than 25 or " + b + "is NOT less than 100"); 
}; 
};
// I think if will be (26, 99) and else will be (10, 101)
What do you expect the console message to be for each?
testStuff(10, 101); 
testStuff(26, 99); 
testStuff(100, 25);
// Correct Answer: 10 is NOT greater than 25 or 101 is NOT less than 100
// 26 is greater that 25 and 99 is less than 100
// 100 is greater than 25 and 25 is less than 100
Given this function
function testStuff2(c, d) { 
if(c == 25){ 
console.log(c + " is equal to 25"); 
} else if(d <= 100){ 
console.log(d + " is less than or equal to 100"); 
} else { 
console.log("Neither if or else if statement ran"); 
}; 
};
// I think the answer for testStuff2 will be (25, 99)
What do you expect the console message to be?
testStuff2(26, 101); 
testStuff2(25, 99); 
testStuff2(102, 24);
// Correct Answer: Neither if or else if statement ran
// 25 is equal to 25
// 24 is less than or equal to 25
// Once you have completed these exercises add them to GitHub.
// All done! Now time to upload this on GitHub!