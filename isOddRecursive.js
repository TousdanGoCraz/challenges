// Write a recursive function called someRecursive
// which accepts an array and a callback. The
// function returns true if a single value in the
// array returns true when passed to the callback.
// Otherwise it returns false.


function someRecursive(arr,isOdd){
    if (arr.length == 0) return false
    if (isOdd(arr[0])) return true
    return someRecursive(arr.slice(1),isOdd)
  
}