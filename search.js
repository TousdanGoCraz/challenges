function search(arr,val){
    let min = 0
    let max = arr.length - 1

    while (min <= max){
        let middle = Math.floor((min + max) / 2)
        let currentElement = arr[middle]
        if (val > arr[middle]){
            min = middle + 1
        }
        else if (val < arr[middle]){
            max = middle - 1
        }
        else {
            return middle
        }
    }
    return - 1  
}

console.log(search([1,2,3,4,5,6],4)) // 3
search([1,2,3,4,5,6],6) // 5
search([1,2,3,4,5,6],11)