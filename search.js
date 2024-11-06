// Input: A sequence of n numbers A D ha1 ; a2 ; : : : ; an i and a value .
// Output: An index i such that  D AŒi or the special value NIL if  does not
// appear in A.

function searchLinear(arr,v){

    for (let i = 0 ;i < arr.length;i++){
        if(arr[i] == v) return arr[i]
        else return null
    }

}