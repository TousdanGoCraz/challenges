function merge(left,right){
    let sortedArr = []
    while(left.length && right.length){
        if (left[0].toLowerCase() < right[0].toLowerCase()){
            sortedArr.push(left.shift())
        }else {
            sortedArr.push(right.shift())
        }
    }
    return [...sortedArr,...left ,...right]
}

function mergeSort(arr){
    if (arr.length <= 1) return arr

    let midpoint = Math.floor(arr.length / 2)

    let left = mergeSort(arr.slice(0,midpoint))
    let right = mergeSort(arr.slice(midpoint))

    return merge(left,right)
}

console.log(mergeSort(["Apple", "orange", "Banana", "carrot", "Grape"]
))