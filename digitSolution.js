// In the following 10 digit number:

// 1234567890 67890 is the greatest sequence of 5
// consecutive digits.

// Complete the solution so that it returns the
// greatest sequence of five consecutive digits
// found within the number given. The number will
// be passed in as a string of only digits. It
// should return a five digit integer. The number
// passed may be as large as 1000 digits.

function solve(str,num){

    let tempSum,maxSum = 0
    
    
    for(let i = 0; i <= str.length - num; i++){
        tempSum = parseInt(str.slice(i, i + num),10)
    }

    if(tempSum > maxSum) maxSum = tempSum

    return maxSum

}

console.log(solve('1234567890',5))