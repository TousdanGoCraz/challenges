//take an arr
//choose a minIndex, first element up till < length - 1
//compare it to find the minimum num in arr
//compare num to find a new minimum in arr
//swap numbers
//return arr
//do this till the end
function selectSort(arr){
    for(let i = 0; i < arr.length - 1; i++){
        let minIndex = i

        for(let j = i + 1; j < arr.length;j++){
            if(arr[minIndex] > arr[j]){
                minIndex = j
            } 
        }

        if (i != minIndex) [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]]
    }
    return arr
}
console.log(selectSort([1,2,3,6532,12,4,15]))