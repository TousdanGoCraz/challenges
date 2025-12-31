// The goal is to create a function of two inputs number and power, that "raises" the number up to power (ie multiplies number by itself power times).

function numberToPower(number, power){
    console.info(Math.log2(1024));
    if (power == 0) return 1
    return number * numberToPower(number,power-1)
  }