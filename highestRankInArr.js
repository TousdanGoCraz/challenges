// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.

function highestRank(arr){
    let frequency = {}
    for(let item of arr){
      frequency[item] = (frequency[item] || 0) + 1
    }
      let maxFreq = 0;
      let result = -Infinity;
  
      for (let num in frequency) {
          let freq = frequency[num];
          let number = parseInt(num);
  
          // Update the result if the current frequency is greater,
          // or if the frequency is the same and the number is larger
          if (freq > maxFreq || (freq === maxFreq && number > result)) {
              maxFreq = freq;
              result = number;
          }
      }
  
      return result;
    
  }