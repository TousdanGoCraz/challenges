//take an arr
//iterate from second element(unsorted portion)
//compare the second element with the one before it and swap
//continue to next element 
//repeat till sorted
function insert(arr){
    for(let i = 1; i < arr.length; i++){
        let key = arr[i]
        let j = i - 1

        while(key < arr[j] && j >= 0){
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = key
    }
    return arr
}

console.log(insert([1,4,2,1,5,6,41]))