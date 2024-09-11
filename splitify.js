//Modify the spacify function so that it returns the given string with spaces inserted between each character.

//spacify("hello world") // returns "h e l l o   w o r l d"

function spacify(str) {
  //P string
  //R return the string with a space between
  //P
    return str.split('')
              .join(' ')
}
