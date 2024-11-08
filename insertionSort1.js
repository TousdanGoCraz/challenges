// function insertionSort(arr){
//     for (let i = 1; i < arr.length;i++){
//         let key = arr[i]
//         let j = i - 1

//         while (key < arr[j] && j >= 0){
//             arr[j+ 1] = arr[j]
//             j--
//         }
//         arr[j+1] = key
//     }
//     return arr
// }



function insertionSort(arr){
    for(let i = 1; i < arr.length;i++){
        let key = arr[i]
        let j = i - 1

        while (key < arr[j] && j >= 0 ){
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = key
    }
    return arr
}

let arr = [34, 8, 64, 51, 32, 21]
console.log(insertionSort(arr))
