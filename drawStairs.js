// iven a number n, draw stairs using the letter "I", n tall and n wide, with the tallest in the top left.

function drawStairs(n) {
    let results = []
    for(let i=0 ; i< n; i++){
      results[i] = `${" ".repeat(i)}I`
    }
    return results.join('\n')
  }