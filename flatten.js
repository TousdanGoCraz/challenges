// Write a recursive function called flatten which
// accepts an array of arrays and returns a new
// array with all values flattened.

function flatten(arr) {
    // Base case: if the array is empty, return an empty array
    if (arr.length === 0) return [];

    // Check if the first element is an array
    if (Array.isArray(arr[0])) {
        // Flatten the first element and concatenate with the flattening of the rest
        return flatten(arr[0]).concat(flatten(arr.slice(1)));
    } else {
        // If the first element is not an array, add it to the flattened result of the rest
        return [arr[0]].concat(flatten(arr.slice(1)));
    }
}