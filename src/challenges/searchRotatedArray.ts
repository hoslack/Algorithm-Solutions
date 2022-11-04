// There is an integer array nums sorted in ascending order (with distinct values).

// Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

// Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4
// Example 2:

// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1
// Example 3:

// Input: nums = [1], target = 0
// Output: -1

// Constraints:

// 1 <= nums.length <= 5000
// -104 <= nums[i] <= 104
// All values of nums are unique.
// nums is an ascending array that is possibly rotated.
// -104 <= target <= 104

const searchRotatedArray = (nums: number[], target: number): number => {
  // create a variable to store the left and right pointers
  let [left, right] = [0, nums.length - 1]

  // while the left pointer is less than or equal to the right pointer
  while (left <= right) {
    // create a variable to store the middle pointer
    const mid = Math.floor((left + right) / 2)

    // if the number at the middle pointer is equal to the target, return the middle pointer
    if (nums[mid] === target) {
      return mid
    }

    // if the left part of the array is sorted
    if (nums[mid] >= nums[left]) {
      // if the target is within the left part of the array
      if (target >= nums[left] && target < nums[mid]) {
        // search the left part of the array by moving the right pointer to the front of the middle pointer
        right = mid - 1
      } else {
        // search the right part of the array by moving the left pointer to the back of the middle pointer
        left = mid + 1
      }
    } else {
      // if the right part of the array is sorted
      // if the target is within the right part of the array
      if (target > nums[mid] && target <= nums[right]) {
        // search the right part of the array by moving the left pointer to the back of the middle pointer
        left = mid + 1
      } else {
        // search the left part of the array by moving the right pointer to the front of the middle pointer
        right = mid - 1
      }
    }
  }

  return -1
}

export default searchRotatedArray
