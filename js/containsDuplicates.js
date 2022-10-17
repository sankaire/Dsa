/**
 * Given an integer array nums, return true if any value appears at least 
 * twice in the array, and return false if every element is distinct.
 */

// Brute force approach time complexity O(n²) space complexity O(1)
const containsDuplicate = (nums) => {
    for (let i = 0; i < nums.length; ++i) {
        for (let j = 0; j < i; ++j) {
            if (nums[i] === nums[j]) {
                return true;
            }
        }
    }
    return false;
}

//sorting approach time complexity O(n log n) space complexity  O(log n) 
const containsDuplicateSorting = (nums) => {
    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length; ++i) {
        if (nums[i] === nums[i + 1]) {
            return true
        }
    }
    return false
}


//using an object time complexity O(n) and space complexity O(n)
const containsDuplicateObject = (nums) => {
    let obj = {}
    for (let i = 0; i < nums.length; ++i) {
        if (obj[nums[i]]) {
            return true
        } else {
            obj[nums[i]] = true
        }
    }
    return false
}