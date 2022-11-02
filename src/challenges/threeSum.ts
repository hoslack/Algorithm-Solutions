// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation:
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.
// Example 2:

// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.
// Example 3:

// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.

// Constraints:

// 3 <= nums.length <= 3000
// -105 <= nums[i] <= 105

// Solution 1: O(n^2) time, O(n) space

const threeSum = (nums: number[]): number[][] => {
  const result: number[][] = []
  const set = new Set<number>(nums)

  for (let i = 0; i < nums.length; i += 1) {
    for (let j = i + 1; j < nums.length; j += 1) {
      const sum = nums[i] + nums[j]
      const complement = -sum

      if (set.has(complement)) {
        result.push([nums[i], nums[j], complement])
      }
    }
  }

  return result
}

const threeSumPointers = (nums: number[]): number[][] => {
  const result: number[][] = [] // O(1)
  nums.sort((a, b) => a - b) // O(n log n) time, O(1) space

  // Loop through the array
  for (let i = 0; i < nums.length; i++) {
    // O(n)

    // If the current number is the same as the previous, skip it (to avoid duplicates)
    if (i > 0 && nums[i] === nums[i - 1]) {
      // O(1)
      continue // O(1)
    }

    // Set the left pointer to the index after the current number
    let left = i + 1
    // Set the right pointer to the last index of the array
    let right = nums.length - 1

    // While the left pointer is less than the right pointer
    while (left < right) {
      // O(n)
      // Set the sum of the current number, left pointer, and right pointer
      const sum = nums[i] + nums[left] + nums[right] // O(1)

      // If the sum is 0
      if (sum === 0) {
        // O(1)
        // Push the current number, left pointer, and right pointer to the result array
        result.push([nums[i], nums[left], nums[right]])
        // Increment the left pointer
        left++ // O(1)
        // Decrement the right pointer
        right-- // O(1)

        // If the left pointer is equal to the number after it, increment the left pointer, to avoid duplicates
        while (left < right && nums[left] === nums[left - 1]) {
          // O(1)
          left++
        }

        // If the right pointer is equal to the number before it, decrement the right pointer, to avoid duplicates
        while (left < right && nums[right] === nums[right + 1]) {
          // O(1)
          right--
        }

        // If the sum is less than 0
      } else if (sum < 0) {
        // O(1)
        // Increment the left pointer
        left++
        // If the sum is greater than 0
      } else {
        // Decrement the right pointer
        right--
      }
    }
  }

  return result
}

export default threeSum
