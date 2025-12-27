// You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all printable ASCII characters.

function uniTotal (string) {
    if (string =='') return 0
    
    return string.charAt(0).charCodeAt(0) + uniTotal(string.slice(1))
  }