function merge(left,right){
    let emptyArr = []
    while(left.length && right.length){
        if(left[0] < right[0]){
            emptyArr.push(left.shift())
        }else {
            emptyArr.push(right.shift())
        }
    }
    return [...emptyArr,...left,...right]
}


function mergeSort(arr){
    if (arr.length < 2) return arr
    let middle = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0,middle))
    let right= mergeSort(arr.slice(middle))
    return merge(left, right)
}


console.log(mergeSort([1,5,2,3126,512,15,2]))