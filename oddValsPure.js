function collectOddValues(arr){
    let newArr = []

    if(arr.length == 0) return newArr
    if (arr[0] % 2 !== 0 )
        newArr.push(arr[0])


    return newArr = newArr.concat(collectOddValues(arr.slice(1)))
}


console.log(collectOddValues([1,2,23,4,1,2,3,5,6]))