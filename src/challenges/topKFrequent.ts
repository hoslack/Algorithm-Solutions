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
    const frequencyMap = new Map<number, number>() // O(1) for creating the map
    for (const num of nums) { // O(n)
        if (frequencyMap.has(num)) { // O(1) for checking if the map has the key
            frequencyMap.set(num, frequencyMap.get(num)! + 1) // O(1) for getting the value and O(1) for setting the value
        } else {
            frequencyMap.set(num, 1) // O(1) for setting the value
        }
    }
    const frequencyArray = Array.from(frequencyMap.entries()) // O(n) for creating the array
    frequencyArray.sort((a, b) => b[1] - a[1]) // O(n log n) for sorting the array
    return frequencyArray.slice(0, k).map((entry) => entry[0]) // O(k) for creating the array
}


export default topKFrequent