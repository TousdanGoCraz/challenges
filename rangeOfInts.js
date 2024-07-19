// Implement the function generateRange which takes three arguments (start, stop, step) and returns the range of integers from start to stop (inclusive) in increments of step.

function generateRange(min, max, step){
    let arr = []
    for (let i = min; i <= max;i += step){
      arr.push(i)
    }
      return arr
    }