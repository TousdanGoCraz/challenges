//Write a function that doubles every second integer in a list, starting from the left.

function doubleEveryOther(a) {
    return a.map((x,i) => i % 2 ? x * 2 : x);
  }