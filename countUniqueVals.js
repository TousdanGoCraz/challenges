function countUniqueValues(arr){
    return [...new Set(arr)].length
}


console.log(countUniqueValues([1,1,1,1,1,2])) // 2
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])) // 7
countUniqueValues([]) // 0
countUniqueValues([-2,-1,-1,0,1]) // 4