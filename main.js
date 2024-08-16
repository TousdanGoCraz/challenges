
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


