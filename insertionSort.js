// let arr = [23,554,12,23,6,7,8]

// function insertionSort(arr){
//     for (let i = 1; i < arr.length; i++){
//     let key = arr[i]
//     let j = i - 1
    
//     while (arr[j] > key){
//         arr[j+ 1] = arr[j]
//         j-- 

//     }
//     arr[j + 1] = key

//     }
//     return arr
    
// }

// console.log(insertionSort(arr))













let arr = [34, 8, 64, 51, 32, 21]
// function insertSort(arr){
//     for (let i = 1; i < arr.length;i++){
//         let key = arr[i]
//         let j = i - 1

//         while (arr[j] > key && j >= 0){
//             arr[j + 1] = arr[j]
//             j--
//         }
//         arr[j+ 1] = key
//     }
//     return arr
// }

// console.log(insertSort(arr))





function insertionSort(arr){
    
    for (let i = 1; i < arr.length;i++){
    let key = arr[i]
    let j = i - 1

    while (key < arr[j] && j >= 0){
        arr[j + 1] = arr[j]
        j--
    }

    arr[j + 1] = key
    }

}