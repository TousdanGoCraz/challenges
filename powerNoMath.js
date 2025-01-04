// The goal is to create a function of two inputs number and power, that "raises" the number up to power (ie multiplies number by itself power times).

function numberToPower(number, power){
    console.info(Math.log2(1024));
    let num = 1
    for(let i = power; i > 0;i--){
      num *= number
    }
    return num
  }