function collectOddValues(arr){
    let result = []
    function helper(helperInput){
        if(helperInput.length == 0 )return
        if (helperInput[0] % 2 !== 0 ){
            result.push(helperInput[0])
        }
        console.log(result)
        helper(helperInput.slice(1))
        
    }   
    helper(arr)
    return result
}

console.log(collectOddValues([1,2,3,5,124,1334,1,12,2315,2]))