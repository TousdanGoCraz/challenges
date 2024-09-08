//Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.

function cubeOdd(arr) {

//P take in an array may contain ints,string,null,undefined
//R return the sum of cubed odd numbers =. If not a number return undefined
//P 
  //iterate through the array , check to see if the value inside the array is a NUMBER
    //check if it is an ODD number
      //get back the cubes of the numbers and sum them together
  if (arr.some(x => typeof x == 'string' || null || undefined)){
    return undefined
  }else{
        return arr.filter(x => typeof x == 'number' && x % 2 != 0)
              .reduce((sum,cur) => sum += cur * cur * cur,0)
  }


}
