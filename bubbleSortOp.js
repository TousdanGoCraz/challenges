function bubbleSort(arr){
    //take an arr
    //loop from the end so that it gets smaller as we sort i > 0
        //createa a variable called noSwaps
        //nested loop start from j = 0, j < i - 1
            //if arr[j] is bigger than arr[j + 1] swap them
            //make the noSwap variable false if it makes no swaps 
        //if no swaps are made, return false
    //return arr
    for(let i = arr.length - 1; i > 0;i--){
        let noSwap = true
        for(let j = 0; j < i - 1;j++){
            if(arr[j] > arr[j+ 1]){
                [arr[j],arr[j + 1]] = [arr[j + 1], arr[j]]
                noSwap = false
            }
        }
        if(noSwap) break
    }
    return arr
}


console.log(bubbleSort([1,2,32,1,52,1,53]))