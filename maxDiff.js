//You must implement a function that returns the difference between the largest and the smallest value in a given list / array (lst) received as the parameter.

//    lst contains integers, that means it may contain some negative numbers
//    if lst is empty or contains a single element, return 0
//    lst is not sorted
function maxDiff(list) {
  //P a list of ints, + & - % 0, not sorted
  //R max difference between max num and min num, 0 if length < 1
  if (list.length <= 1){
    return 0
  } else {
    return Math.max(...list) - Math.min(...list)

  }
  };
