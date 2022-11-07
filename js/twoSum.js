/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// Brute force -> time complexity is  O(n²)
const twoSum = (nums, target) =>{
    for(let i = 0; i < nums.length; ++i){
        for(let j = i + 1; j < nums.length; ++j){
            if(nums[i] + nums[j] === target){
                return [i,j]
            }
        }
    }
}
// TODO: implement hash map approach 



// TODO: implementn binary search approach