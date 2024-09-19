
// Write a function that returns the total surface area and volume of a box as an array: [area, volume]


function getSize(width, height, depth){
    let s = width *height *depth
    let a = (width * height + height * depth + depth * width) * 2
    return [a, s]
  }
  