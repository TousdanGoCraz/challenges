// Your task is to make a function hotpo that takes a positive n as input and returns the number of times you need to perform this algorithm to get n = 1.

var hotpo = function(n){
    let step = n
    let i = 0
    if(step == 0) return 0; 
    while(step != 1){
      if(step % 2 == 0) step = step / 2
      else step = (3 * step) + 1
      i++
    }
  return i
}