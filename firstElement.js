// Write a function to get the first element(s) of a sequence. Passing a parameter n (default=1) will return the first n element(s) of the sequence.
// If n == 0 return an empty sequence []
function first(arr, n) {
    //P: arr, only letters, number
    //R return array of elements up till n element not index, return [] for n == 0 
    //P
      //Loop
    if (n < 1){
      return []
    }else
        return arr.filter(x => arr.splice(n))
  }