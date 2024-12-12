// Sort the Gift Code

// Write a function called sortGiftCode/sort_gift_code/SortGiftCode that accepts a string containing up to 26 unique alphabetical characters, and returns a string containing the same characters in alphabetical order.

function sortGiftCode(code){
    let arr = code.split('')
    for(let i = arr.length - 1 ; i > 0;i--){
      for(let j = 0; j < i;j++){
        if(arr[j] > arr[j + 1]){
          [arr[j],arr[j + 1]] = [arr[j + 1], arr[j]]
        }
      }
    }
    return arr.join('')
  
}