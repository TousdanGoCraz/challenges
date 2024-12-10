// Sort the Gift Code

// Write a function called sortGiftCode/sort_gift_code/SortGiftCode that accepts a string containing up to 26 unique alphabetical characters, and returns a string containing the same characters in alphabetical order.


function merge(left,right){
    let sortedArr = []
    while(left.length && right.length){
      if(left[0] < right[0]){
        sortedArr.push(left.shift())
      }else{
        sortedArr.push(right.shift())
      }
    }
    return [...sortedArr,...left,...right]
  }
  
  
  
  function sortGiftCode(code){
    let chars = code.split('')
    if(chars.length < 2) return code
    
    let mid = Math.floor(chars.length / 2)
    let left = sortGiftCode(chars.slice(0, mid).join('')); // Recursive sort for the left half
    let right = sortGiftCode(chars.slice(mid).join(''));  // Recursive sort for the right half
  
      return merge(left.split(''), right.split('')).join('');
  
  }