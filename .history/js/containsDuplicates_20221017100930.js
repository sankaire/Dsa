/**
 * Given an integer array nums, return true if any value appears at least 
 * twice in the array, and return false if every element is distinct.
 */
const containsDuplicate = (nums) => {
    for (let i = 0; i < nums.length; ++i) {
        for (let j = 0; j < i; ++j) {
            if (nums[i] == nums[j]) {
                return true;
            }
        }
    }
    return false;
}