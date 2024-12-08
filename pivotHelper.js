
// It will help to accept three arguments: an
// array, a start index, and an end index (these
// can default to 0 and the array length minus 1,
// respectively) Grab the pivot from the start of
// the array Store the current pivot index in a
// variable (this will keep track of where the
// pivot should end up) Loop through the array
// from the start until the end
function pivot(arr,start = 0, end = arr.length - 1){
    let currentPivot = 0
    let pivotIndex = 0
    for(let i = 1; i <= end;i++){
        if(arr[pivotIndex] > arr[i]){
            currentPivot++
            [arr[i],arr[currentPivot]] = [arr[currentPivot],arr[i]]
        }
    }
    [arr[0],arr[currentPivot]] = [arr[currentPivot],arr[0]]
    return arr
}
// If the pivot is greater than the current
// element, increment the pivot index variable and
// then swap the current element with the element
// at the pivot index

// Swap the starting element (i.e. the pivot) with
// the pivot index Return the pivot index
console.log(pivot([11,25,31,17,9,36,7,8,6,3413,12,4,1]))
console.log(pivot([4,8,2,1,5,7,6,3]))