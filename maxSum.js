function maxSum(arr,num){
    //input is array, num, valid, non-empty
    //maximum sub array
    //2 variables 
        //one for maximum sum, one for tempsum
        //initialize the sliding window for the first n elements
        //for loop
            //slide the sliding window
                //temp- first element, plus next element
                //change maxSum based on value
    let tempSum,maxSum = 0

    if(arr.length < num || num == 0) return null
    for(let i = 0; i < num;i++){
        maxSum += arr[i]
    }
    tempSum = maxSum
    for(let i = num; i < arr.length;i++){
        tempSum = tempSum - arr[i - num] + arr[i]
        maxSum = Math.max(tempSum, maxSum)
    }
    return maxSum
}


console.log(maxSum([1,2,5,42,32,54],1))