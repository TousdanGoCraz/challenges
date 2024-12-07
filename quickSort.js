function pivot(arr,start = 0, end = arr.length - 1){
    let pivotIndex = start
    let pivotValue = arr[start]
    for(let i = start + 1; i < arr.length;i++){
        if (pivotValue > arr[i]){
            pivotIndex++
            [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
        }
    }
    [arr[start], arr[pivotIndex]] = [arr[pivotIndex], arr[start]];
    return pivotIndex;
}



// Call the pivot helper on the array When the
// helper returns to you the updated pivot index,
// recursively call the pivot helper on the
// subarray to the left of that index, and the
// subarray to the right of that index Your base
// case occurs when you consider a subarray with
// less than 2 elements


function quickSort(arr,start = 0, end = arr.length - 1){
    if (start >= end) return arr;

    let pivotIndx = pivot(arr,start,end)
    quickSort(arr,start, end = pivotIndx - 1)
    quickSort(arr,start = pivotIndx + 1, end)
    return arr

}

console.log(quickSort([4,8,2,1,5,7,6,3]))
