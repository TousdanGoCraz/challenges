// The function giveMeFive accepts 1 parameter, obj, which is an object.

// Create an array (which you will eventually return). Then, traverse obj, checking each key and value. If the length of the key is equal to 5, then push the key to your array. Separately, if the length of the value is equal to 5, then push the value to your array.

// At the end, return your array.

// You should use for..in in your code, otherwise your solution may not pass this kata.


function giveMeFive(obj){
 let arr = []
 for(let item in obj){
   if(item.length == 5) arr.push(item)
   if (obj[item].length == 5) arr.push(obj[item])
 }
  return arr
  
}