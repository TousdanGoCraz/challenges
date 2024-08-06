//Given a number, Find if it is Tidy or not . 
function tidyNumber(n){
  return String(n).split('').map(Number).join() == String(n).split('').map(Number).sort((a,b) => a - b).join()
}
