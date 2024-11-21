
// Write a recursive function called isPalindrome
// which returns true if the string passed to it
// is a palindrome (reads the same forward and
// backward). Otherwise it returns false.
function isPalindrome(str){
    if (str.length <= 1) return true  
    if(str.charAt(0) != str.charAt(str.length - 1)) return false
    
    return isPalindrome(str.slice(1,-1))

    
}