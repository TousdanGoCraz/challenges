// In javascript, Boolean object only has two value, true or false. Use ===, ==, >, <, >=, <= between two variables(or constant), the result of such an expression is a bool value. The operation between the two bool values can be used with logical operators:&&, ||, ! or some bitwise operators:&, |, ^

function trueOrFalse(val){
    return val ? 'true' : 'false'
  }