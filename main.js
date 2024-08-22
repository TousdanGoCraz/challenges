
// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the
// sorted (ascending) order. Example:
// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

function flattenAndSort(array) {
    // Good luck, brave code warrior!
    return [].concat(...array).sort((a,b) => a - b)
  }


  // Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers
  // having that operator used on them. a and b will both be positive integers, and a will always be the first number in
  // the operation, and b always the second.
  // The four operators are "add", "subtract", "divide", "multiply".   

  function arithmetic(a, b, operator){
    switch(operator) {
      case 'add':
        return a + b;
      case 'subtract':
        return a - b;
      case 'multiply':
        return a * b;
      case 'divide':
        return a / b;
    }
  }


//Your task is to write function factorial.

function factorial(n){
  let sum = 1;
   for (let i = 1; i <= n; i++){
     sum = sum * i;
   }
   return sum; 
 
 }


//Return the number (count) of vowels in the given string.
//We will consider a, e, i, o, u as vowels for this Kata (but not y).
//The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  let vowels = ['a','e','i','o','u']
  let sum= 0
  str.split('').filter(element => {
    for (let i = 0; i < vowels.length;i++){
      if (element == vowels[i]){
        sum+= 1
      }else {
        null
      }
    }
  })
  return sum
}

//n anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).
//Note: anagrams are case insensitive
//Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

var isAnagram = function(test, original) {
  var t = test.toLowerCase().split('').sort().join('');
  var o = original.toLowerCase().split('').sort().join('');
  
  return (t==o)?true:false;
};
  
  
//  Given an array of ones and zeroes, convert the equivalent binary value to an integer.
//Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

const binaryArrayToNumber = arr => {
 
  return arr
          .reverse()
          .map((c,i) => {
              return Math.pow(2,i) * c
          })
          .reduce((sum,cur) => {
             return sum + cur
  })
};


//JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given. 
function getEvenNumbers(numbersArray){
  return numbersArray.filter(c => c % 2 == 0)
}

//Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.


function evenNumbers(array, number) {
  return array.filter(num => num % 2 == 0).reverse().slice(0,number).reverse()
}
