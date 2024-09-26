// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
// Example

// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

// The returned format must be correct in order to complete this challenge.

// Don't forget the space after the closing parentheses!


function createPhoneNumber(numbers){
    //P 10 ints, 0 =< x< 9, may be duplicates, Valid , numbers only 
    //R string, first 3n will be inside paranthesis,second triplet dash in between the quartet
    //R convert to string, join together, write conditional for first triplet to have paranthesis
    // and second triplet to have a dash
    numbers = numbers.join('')
    let firstTriplet =  `(${numbers.slice(0,3)}) `
    let secondPart = `${numbers.slice(3,6)}-${numbers.slice(6)}`
    return firstTriplet + secondPart
  }