//Write a function that merges two sorted arrays into a single one. The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate.
function mergeArrays(a, b) {
    //P two arrays, integers only
    //R array, no duplicates,integers, merged
    //P
      //filter items, no duplicates
      let newArr = []
        a.concat(b).filter(x => !newArr.includes(x) ? newArr.push(x) : null)
    return newArr.sort((a,b) => a - b)
  }