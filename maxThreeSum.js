//Given an array/list [] of n integers , find maximum triplet sum in the array Without duplications .
function maxTriSum(numbers){
  return ([...new Set(numbers)]).sort((a,b) => a-b).slice(-3).reduce((a,b) => a+b);
}
