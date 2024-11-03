// Remove n exclamation marks in the sentence from left to right. n is positive integer.
// Examples
// remove("Hi!",1) === "Hi"
// remove("Hi!",100) === "Hi"
// remove("Hi!!!",1) === "Hi!!"
// remove("Hi!!!",100) === "Hi"
// remove("!Hi",1) === "Hi"
// remove("!Hi!",1) === "Hi!"
function remove(s,n){
    //coding and coding....
    
    for (let i =0; i< n;i++){
      s= s.replace('!','')
    }
    return s
  }
  