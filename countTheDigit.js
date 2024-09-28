
// Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.

// Square all numbers k (0 <= k <= n) between 0 and n.

// Count the numbers of digits d used in the writing of all the k**2.

// Implement the function taking n and d as parameters and returning this count.


function nbDig(n, d) {
    //P Integer, 0<=n and a 0<= digit <= 9
    //R number of instances of d included in k * k 
    let sum = 0
    for (let i = 0; i <= n; i++){
       sum+= Math.pow(i, 2).toString().split('').filter(x => x == d).length
    }
    return sum
  }