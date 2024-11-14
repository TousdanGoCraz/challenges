function sumZero(arr){
    for (let i = 0;i < arr.length;i++){
            if (arr[i] + arr[arr.length - i - 1] == 0) return [arr[i],arr[arr.length -i - 1]]
    }
}

console.log(sumZero([-3,-2,-1,0,1,2,3]))
console.log(sumZero([1,2,3]))