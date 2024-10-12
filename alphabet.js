// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.
function alphabetPosition(text) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    return text.replaceAll(' ','').toLowerCase().split('')
      .filter(x => alphabet.includes(x))
      .map(x => alphabet.indexOf(x) + 1).join(' ')
  }