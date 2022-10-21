// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]
 

// Constraints:

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104
// k is in the range [1, the number of unique elements in the array].
// It is guaranteed that the answer is unique.
 

// Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

const topKFrequent = (nums: number[], k: number): number[] => {
    const frequencyMap = new Map<number, number>()
    for (const num of nums) {
        if (frequencyMap.has(num)) {
            frequencyMap.set(num, frequencyMap.get(num)! + 1)
        } else {
            frequencyMap.set(num, 1)
        }
    }
    const frequencyArray = Array.from(frequencyMap.entries())
    frequencyArray.sort((a, b) => b[1] - a[1])
    return frequencyArray.slice(0, k).map((entry) => entry[0])
}

export default topKFrequent