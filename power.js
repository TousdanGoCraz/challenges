
function power(base,ex){
    if(base == 0 || ex == 0) return 1
    return base * power(base, ex - 1)
    
}