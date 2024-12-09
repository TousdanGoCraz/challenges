// Sort the Gift Code

// Write a function called sortGiftCode/sort_gift_code/SortGiftCode that accepts a string containing up to 26 unique alphabetical characters, and returns a string containing the same characters in alphabetical order.


function sortGiftCode(code) {
    // Convert the string into an array of characters
    let chars = code.split('');

    // Selection Sort Algorithm
    for (let i = 0; i < chars.length - 1; i++) {
        let minIndex = i; // Assume the current index is the smallest
        for (let j = i + 1; j < chars.length; j++) {
            if (chars[j] < chars[minIndex]) {
            }
                minIndex = j; // Update minIndex if a smaller character is found
        }
        // Swap the smallest character with the current index
        if (minIndex !== i) {
            [chars[i], chars[minIndex]] = [chars[minIndex], chars[i]];
        }
    }

    // Join the sorted array back into a string and return
    return chars.join('');
}
