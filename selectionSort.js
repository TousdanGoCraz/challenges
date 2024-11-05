function selectSort(arr){
    for(let i = 0;i < arr.length - 1;i++){
        let minIndex = i

        for(let j = i + 1; j < arr.length;j++){
            if (arr[j] < arr[minIndex]){
                minIndex = j
            }
        }

        if (minIndex !== i){
            let temp = arr[i]
            arr[i] = arr[minIndex]
            arr[minIndex] = temp
        }
    }
    return arr
}

// function selectionSort(arr) {
//     // Loop over the entire array
//     for (let i = 0; i < arr.length - 1; i++) {
//       // Assume the first unsorted element is the smallest
//       let minIndex = i;
      
//       // Loop to find the smallest element in the remaining unsorted portion
//       for (let j = i + 1; j < arr.length; j++) {
//         if (arr[j] < arr[minIndex]) {
//           minIndex = j; // Update minIndex if a smaller element is found
//         }
//       }
      
//       // Swap the smallest element found with the first unsorted element
//       if (minIndex !== i) {
//         let temp = arr[i];
//         arr[i] = arr[minIndex];
//         arr[minIndex] = temp;
//       }
//     }
    
//     return arr;
//   }

let arr = [1,23,6,73,1351,13,21,23,3,1,2]
console.log(selectSort(arr))