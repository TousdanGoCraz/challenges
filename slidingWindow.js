function slidingWidow(arr,num){
    let maxSum = 0
    let tempSum = 0

    if (arr.length < num) return null
    for (let i = 0; i < num;i++){
        maxSum += arr[i]    
    }
    console.log(maxSum)
    tempSum = maxSum;
    for(let i = num ; i < arr.length;i++){
        tempSum = tempSum - arr[i - num] + arr[i]
        maxSum = Math.max(tempSum, maxSum)
    }
    return maxSum
}

console.log(slidingWidow([2,1,3,42,1,2,3,4,5,1,2,32,54,1,2,3],3))