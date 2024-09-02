//Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers. Return as a number.

function divCon(x){
  return x.reduce((sum,cur) => {
    return typeof cur == 'string' ? sum-= +cur : sum+= cur 
  },0)

}

