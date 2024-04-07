function countUniqueValues(arr){
    let val = 0
    let valPlus = 1
    let n = []
    while(valPlus != arr.length - 1){
        if (arr[val] == arr[valPlus]){
            valPlus++}

        if (arr[val] != arr[valPlus]){
            val++
            arr[val] = arr[valPlus]
        }
    }
    console.log(arr)
    return val + 1
}




console.log(countUniqueValues([1,1,1,1,1,2])) // 2
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])) // 7