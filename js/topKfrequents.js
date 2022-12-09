/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = (nums, k) => {
    let counts = new Map();
    let buckets = [];
    for (let i = 0; i <= nums.length; i++)
        buckets.push([]);

    for (let num of nums) {
        if (counts.has(num)) {
            counts.set(num, counts.get(num) + 1);
        } else {
            counts.set(num, 1);
        }
    }

    for (let [key, value] of counts) {
        buckets[value].push(key);
    }

    let ans = [];
    for (let i = buckets.length - 1; i > 0 && ans.length < k; i--) {
        if (buckets[i] !== null) ans.push(...buckets[i]);
    }
    return ans;
}

