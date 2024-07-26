// Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// "Hey fellow warriors"  --> "Hey wollef sroirraw" 
// "This is a test        --> "This is a test" 
// "This is another test" --> "This is rehtona test"

function spinWords(s){
    //P string only letters and space. spaces only if more than one word.
    //R the same string, letters with length more than five letters reversed
    
    //P
      //turn into array
    // check their length > 5 
    //reverse the element 
    //turn into string
    
    return s.split(' ').length > 1 ? s.split(' ').map(x => x.length >= 5 ? x.split('').reverse().join('') : x).join(' ') :
          s.split('').length >= 5 ? s.split('').reverse().join(''): s
  }