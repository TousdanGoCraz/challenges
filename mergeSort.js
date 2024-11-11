//to implement mergesort you have to have two functions 
//one for splitting the array
//one for merging the array

// function merge(left,right){
//     let sortedArr = []
//     while(left.length && right.length){
//         if(left[0] < right[0]){
//             sortedArr.push(left.shift())
//         }else {
//             sortedArr.push(right.shift())
//         }
//     }
//     return [...sortedArr,...left, ...right]
// }


// function mergeSort(arr){
//     let sortedArr = []
//     if (arr.length <= 1) return arr
//     //recursively call mergeSort
//         //find the middle point
//             //split the array to left and right array until arr.length = 1
   
//         let mid = Math.floor(arr.length / 2)  
        
//         let left = mergeSort(arr.slice(0,mid))
//         let right = mergeSort(arr.slice(mid))

//         return merge(left,right)
// }









function merge(left,right){
    let sortedArr = []
    while(left.length && right.length){
        if(left[0] < right[0]){
            sortedArr.push(left.shift())
        }else {
            sortedArr.push(right.shift())
        }
    }
    return [...sortedArr,...left,...right]
}

function mergeSort(arr){
    if (arr.length <= 1) return arr
    let midpoint = Math.floor(arr.length/2)

    let left = mergeSort(arr.slice(0,midpoint))
    let right = mergeSort(arr.slice(midpoint))

    return merge(left,right)
}





console.log(mergeSort([2,4,6,22,3,6,771,1]))