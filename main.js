
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

//Write a small function that returns the values of an array that are not odd. 

function noOdds( values ){
  return values.filter(el => el % 2 == 0)
}


//write a simple helper function to capitalize a string (that contains a single word) 
//Fix the helper function they wrote so that it works as intended (i.e. it must make the first character in the string upper case).

function capitalizeWord(word) {
  return word[0].toUpperCase() + word.slice(1);
}


//Bob is bored during his physics lessons so he's built himself a toy box to help pass the time. The box is special because it has the ability to change gravity.
//There are some columns of toy cubes in the box arranged in a line. The i-th column contains a_i cubes. At first, the gravity in the box is pulling the cubes downwards. When Bob switches the gravity, it begins to pull all the cubes to a certain side of the box, d, which can be either 'L' or 'R' (left or right). Below is an example of what a box of cubes might look like before and after switching gravity.

const flip=(d, a)=>{
  //TODO
  return d == 'R'? a.sort((a,b)=>a-b): a.sort((a,b)=>b-a)
}


//Suzuki is a monk who climbs a large staircase to the monastery as part of a ritual. Some days he climbs more stairs than others depending on the number of students he must train in the morning. He is curious how many stairs might be climbed over the next 20 years and has spent a year marking down his daily progress.
//The sum of all the stairs logged in a year will be used for estimating the number he might climb in 20.
//20_year_estimate = one_year_total * 20
//You will receive the following data structure representing the stairs Suzuki logged in a year. You will have all data for the entire year so regardless of how it is logged the problem should be simple to solve.
//stairs = [sunday,monday,tuesday,wednesday,thursday,friday,saturday]
//Make sure your solution takes into account all of the nesting within the stairs array.
//Each weekday in the stairs array is an array.
//sunday = [6737, 7244, 5776, 9826, 7057, 9247, 5842, 5484, 6543, 5153, 6832, 8274, 7148, 6152, 5940, 8040, 9174, 7555, 7682, 5252, 8793, 8837, 7320, 8478, 6063, 5751, 9716, 5085, 7315, 7859, 6628, 5425, 6331, 7097, 6249, 8381, 5936, 8496, 6934, 8347, 7036, 6421, 6510, 5821, 8602, 5312, 7836, 8032, 9871, 5990, 6309, 7825]
//Your function should return the 20 year estimate of the stairs climbed using the formula above. 

function stairsIn20(s){
  let out = 0
  for (let day of s){
    out += day.reduce((sum,cur) => sum + cur * 20,0)
  }
  return out
}	

//Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

function adjacentElementsProduct(array) {
  let newArr = []
  for(i=0; i < array.length-1; i++){
    newArr.push(array[i]*array[i+1])
  }  
  return Math.max(...newArr)
}


