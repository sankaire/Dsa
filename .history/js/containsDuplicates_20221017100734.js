/**
 * Given an integer array nums, return true if any value appears at least 
 * twice in the array, and return false if every element is distinct.
 */
const containsDuplicate = (arr) => {
    let i = 0
    let j = 0
    for (i; i < arr.length; i++) {
        for (j; j < i; ++j) {
            if (arr[i] === arr[j]) {
                return true
            }
            return false
        }
    }
}
containsDuplicate([1, 2, 2, 3, 4, 5])