console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
console.log('--- 1. result "Hello World!" ---');
//**** comment:
//re-write function above in arrow function style
//  *this style of arrow function only works if the function has only one statement
// hello = () => 'Hello World!';

function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());

// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
console.log('--- 2. personalized hello to name ---');
//**** comment:
//  declare a variable 'name' and assigned it to my name Xai (string)
//  created a reuseable function named helloName()
//  when invoking the helloName() function it will return 'Hello, Xai!' (string)

const name = 'Xai'; 
function helloName() {
  return `Hello, ${name}!`; 
}
// Remember to call the function to test
console.log(helloName());

// 3. Function to add two numbers together & return the result
console.log('--- 3. add two numbers using function/return ---');
//**** comments:
//   wrote a function and named it addNumbers()
//  there are two numbers we are adding together, two parameters 
//  parameters are variables or placeholders that will be used to pass in outside information into our function
//  we will name those parameters num1 and numb 2 *each parameter should be separated by a comma!
//  inside the curly braces { } is where we want the function to perform
//  in this case we want the function to be able to add two numbers together, take the parameters num1 + numb2
// however, we must use the keyword return before executing the procedural of num1 + num2
// because the return is the final product given back to us after the function is done running.
// summary: our function below is saying "num1 and num2
//    and add them together, in 'return' is your solution of the two parameters
function addNumbers(num1, num2) {
  return num1 += num2;
}
console.log('Test; 5 + 5 = 10 and the return result:', addNumbers(5, 5));
console.log('Test; 3 + 8 = 11 and the return result:', addNumbers(3, 8));
console.log('Test; 9 + 3 = 12 and the return result:', addNumbers(9, 3));
console.log('Test; 2 + 11 = 13 and the return result:', addNumbers(2, 11));

// 4. Function to multiply three numbers & return the result
console.log('--- 4. multiply three numbers & return the result --- ');
//**** comments:
//  same story scenarios as question#2; only difference is we have three parameters instead of two
//  here we are saying 'multiply num1, num2, num3 together
//  and in return is your solution of the there parameters when invoked
function multiplyThree(num1, num2, num3) {
  return num1 * num2 * num3;
}
console.log('Test; 1 * 3 * 3 = 9 and the return result:', multiplyThree(1, 3, 3));
console.log('Test; 2 * 5 * 7 = 70 and the return result:', multiplyThree(2, 5, 7));
console.log('Test; 3 * 4 * 2 = 24 and the return result:', multiplyThree(3, 4, 2));

// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
//  Call the function to test each outcome (true & false)
//  Write a separate console.log statement for each outcome
console.log('--- 5. function with boolean and conditions---');
//**** comments:
//  function is verifying the parameter (number) is it positive? TRUE OR FALSE?
//  first condition will result in 'TRUE' if the number is greater than 0
//  otherwise it will be false, because it is either 0 or negative number
function isPositive(number) {
  if (number > 0) {
    return true;
  } else {
    return false;
  }
}
console.log('isPositive - should say true', isPositive(3));
console.log('isPositive - should say false', isPositive(0));
console.log('isPositive - should say false', isPositive(-3));

// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
console.log('--- 6. function to return last item in an array ---');
//**** comments:
//  declared variable 'array' assigned it to 'undefine' by using square brackets and nothing inside the brackets
//  use the pop () method; this remove the last item from an array list
//  declared a new object/variable name itemRemoved assigned it to original array and append pop method to it
//  create a function (procedure) and named it getLast()
//  this function will take the parameters (values) from array after the fact that pop method is applied
//  and return the last item that was removed from the array list.
//  and in this case our array will return in result of undefined because there is currently nothing inside our array list
let array = [];
let itemRemoved = array.pop();
function getLast(array) {
  return itemRemoved;
}
console.log('Last item in the array is:', getLast());

// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
console.log('--- 7. function to return a boolean, if value is present in array ---');
//**** comments:
//  created arrays (1 and 2) to test function named 'find'
//  inside the function we have two parameters we are passing in (value and the array)
//  when invoking the function we are looping through the array list that was passed in
//  then we're checking if the value we passed in is equal in value/type as in each item of the list
//  if it does exist/found it will return true (boolean); otherwise false (boolean)
let array1 = ['bird', 'bat', 'beetles']; //sample array 
let array2 = ['apple', 'berry', 'cherry']; // sample array
function find(value, list) {
   for (i = 0; i < list.length; i++){
    if (value === list[i]) {
      return true; 
    } else {
      return false;
    }
   }
}
console.log('Is this value (Xai) in array1? - it should say false:', find('Xai', array1));
console.log('Is this value (bird) in array1? - it should say true:', find('bird', array1));
console.log('Is this value (bird) in array2? - it should say false:', find('bird', array2));
console.log('Is this value (apple) in array2? - it should say true:', find('apple', array2));


// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
console.log('--- 8. STRETCH GOAL: a function with boolean to check first letter ---');
//**** comments:
//    created a function isFirstLetter() and in the parameter we are testing the first letter and the string (this is just a place holder)
//    once a letter and string passes through function  
//    it will check to see if the string's (element/value) is greater than or equal to the letter (the 0 index of the string)
//    if the first letter is valid that of letter than return true (boolean)
//    otherwise, return false (boolean)
function isFirstLetter(letter, string) {
  if (string >= letter) {
    return true;
  } else {
    return false;
  }
}
console.log('isFirstLetter - should say true', isFirstLetter('a', 'apple'));
console.log('isFirstLetter - should say false', isFirstLetter('z', 'apple'));

// 9. Function to return the sum of all numbers in an array
console.log('--- 9. STRETCH GOAL: function to return the sum of array ---');
//**** comments:
//  declared variable sumArray and assigned [11,22,33,44] number in array 
//  created function name sumAll() 
//  define a variable that only work in block code called sum, assigned it to 0 as the initializer/starter
//  added a for in loop; loops through element/value in sumArray to calculate sum of elements
//  then return the sum (sum of all the elements of the array).
// NOTE: the numbers in sumArray are just samples; any number can be use and go through this function
//        the end result will be the same.
const sumArray = [11,22,33,44]; //sample numbers
function sumAll() {
  let sum = 0;
  // TODO: loop to add items
  for (let i in sumArray) {
    sum += sumArray[i];
  }
  return sum;
}
sumAll();
console.log('The sum of all numbers in array:', sumAll());

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
console.log('--- 10. STRETCH GOAL: function to return a new array of all positive number ---');
//**** comments:
//  use the filter() method: 
//     it creates a new array containing all the elements in the array that passes the function
//  declared a variable called numArray, assigned it with sample numbers below inside square brackets (array)
//  since filter method creates a new array, we declared another variable positiveArray
//  assigned numArray to positiveArray and apply the filter() method here 
//  because we want the new array to filter through the numArray that passes the function's parameter(positiveNumber) 
//  invoked the function and check if the value passed is greater than or equal to 0;
//  if yes, it will be spit out as part of the new array (positiveArray). 
//  any numbers less than 0 won't go into the array. 

// const numArray = [-12, -13, -14, -1]; //all negative numb samples --> the return array will be ['empty']
const numArray = [33, 42, -11, -7, -1, 0, 55]; // random numb samples --> the return array will be [33, 42, 0, 55]
const positiveArray = numArray.filter(positiveNumber);
function positiveNumber(numArray) {
  return numArray >= 0;
}
console.log('New array with positive numbers:', positiveArray);

// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!
console.log('--- 11. STRETCH GOAL: pick a challenge and solve it! ---');
//**** comments:
//  from: Edabit url: https://edabit.com/challenge/nBW6ubsQCurPvhpWc
//  create  function that takes a string of lowercase characters
//  and returns that string reversed && in upper case 
// code explanation: 
//    1) created a test variable name school assigned to prime (string)
//    2) created a function named reverseCapitalize(string) when invoked it will pass string to pass it through the test of:
//    3) split(); this method takes the string and separate the value into an array
//    4) reverse(); this method will take the current array order and reverse it
//    5) join(); this method will take the array and turn it into a string by joining together all the array elements
//    6) toUpperCase(): this method will capitalize a string
//    7) after the string goes through each of the methods above we want it to return reverse and capitalized

// const school = 'prime'; // string
// function reverseCapitalize(string) {
//   const splitSch = school.split(""); console.log(splitSch); // ['p', 'r', 'i', 'm', 'e]
//   const backwardSch =  splitSch.reverse(); console.log(backwardSch); //['e', 'm', 'i', 'r', 'p']
//   const joinSch = backwardSch.join(""); console.log(joinSch); // emirp
//   const capSch = joinSch.toUpperCase(); console.log(capSch); //EMIRP
//   return capSch;
// }
// console.log('Prime in reversed and capitalized:', reverseCapitalize()); 

function reverseCapitalize(string) {
  const splitMethod = string.split(""); 
  const revsMethod =  splitMethod.reverse(); 
  const joinMethod = revsMethod.join(""); 
  const capMethod = joinMethod.toUpperCase(); 
  return capMethod;
}
console.log('Testing:', (reverseCapitalize("edabit")));
console.log('Testing:', (reverseCapitalize("abc")));
console.log('Testing:', (reverseCapitalize("hellothere")));
console.log('Testing:', (reverseCapitalize("input")));
console.log('Testing:', (reverseCapitalize("indubitably")));