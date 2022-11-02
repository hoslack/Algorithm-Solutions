// Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

// Return the sum of the three integers.

// You may assume that each input would have exactly one solution.

// Example 1:

// Input: nums = [-1,2,1,-4], target = 1
// Output: 2
// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
// Example 2:

// Input: nums = [0,0,0], target = 1
// Output: 0
// Explanation: The sum that is closest to the target is 0. (0 + 0 + 0 = 0).

// Constraints:

// 3 <= nums.length <= 500
// -1000 <= nums[i] <= 1000
// -104 <= target <= 104

const threeSumClosestTwoPointer = (nums: number[], target: number): number => {
  // sort the array
  nums.sort((a, b) => a - b)

  // create a variable to store the closest sum to Infinity (or -Infinity)
  let closestSum = Infinity

  // loop through the array
  for (let i = 0; i < nums.length; i++) {
    // create two pointers, one at the second element in the array and one at the end
    let [left, right] = [i + 1, nums.length - 1]

    // while the left pointer is less than the right pointer
    while (left < right) {
      // add the numbers at the left and right pointers
      const sum = nums[i] + nums[left] + nums[right]
      // if the sum is equal to the target, return the sum
      if (sum === target) {
        return sum
        // if the sum is less than the target, increment the left pointer
      } else if (sum > target) {
        right--
        // if the sum is greater than the target, decrement the right pointer
      } else {
        left++
      }

      // `Math.abs` returns the absolute value of a number
      // if the absolute value of the sum minus the target is less than the absolute value of the closest sum minus the target
      if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
        // update the closest sum to the sum
        closestSum = sum
      }
    }
  }

  return closestSum
}

export default threeSumClosestTwoPointer
