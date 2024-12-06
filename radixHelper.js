function help(number, pos){
    number = String(number).split('').reverse().join('')
    if(number.length < pos) return 0 
    return number.charAt(pos)
}


console.log(help(124551,8))