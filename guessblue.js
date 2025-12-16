
// You've decided to write a function, guessBlue() to help automatically calculate whether you should guess "blue" or "red". The function should take four arguments:

//     the number of blue marbles you put in the bag to start
//     the number of red marbles you put in the bag to start
//     the number of blue marbles pulled out so far (always lower than the starting number of blue marbles)
//     the number of red marbles pulled out so far (always lower than the starting number of red marbles)

function guessBlue(blueStart, redStart, bluePulled, redPulled) {
    let blue = blueStart - bluePulled
    let red = redStart - redPulled
    return blue / (blue + red)
  }