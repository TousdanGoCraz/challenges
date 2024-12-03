// Well, you may have guessed it by now, but to be
// clear: you need to create a fibonacci function
// that given a signature array/list, returns the
// first n elements - signature included of the so
// seeded sequence.

// Signature will always contain 3 numbers; n will
// always be a non-negative number; if n == 0,
// then return an empty array (except in C return
// NULL) and be ready for anything else which is
// not clearly specified ;)

function tribonacci(signature,n){
    //take in an arr with length of 3, non negative, integer, true, either 0 or 1
    //take a number for the length of the sequence, if n is 0, return an empty array
    //create a sliding window
    //the window will concat a value to the end of the array
    //and when array is called again it will concat a new number including n
    let sum = 0
    let newArr = []
    for(let i =0; i < signature.length;i++){
      newArr.push(signature[i])
    }
    if(n > signature.length){
      for(let j = 0; j <= n - signature.length - 1;j++){
        sum = newArr[j] + newArr[j + 1] + newArr[j + 2]
        newArr.push(sum)
          }
      }else if( n < signature.length){
      return signature.slice(0,n)
    }
      
    return newArr
    }
  