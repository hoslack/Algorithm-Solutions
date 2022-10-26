// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

// Constraints:

// 2 <= nums.length <= 105
// -30 <= nums[i] <= 30
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)

const productExceptSelf1 = (nums: number[]): number[] => {
  const result = []
  let product = 1
  for (let i = 0; i < nums.length; i++) {
    result[i] = product
    product *= nums[i]
  }
  product = 1
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= product
    product *= nums[i]
  }
  return result
}

function productExceptSelf(nums: number[]): number[] {
  const result = [] // O(n)
  const left = new Array(nums.length).fill(1)
  const right = new Array(nums.length).fill(1)

  for (let i = 1; i < nums.length; i++) {
    left[i] = left[i - 1] * nums[i - 1]
  }

  for (let j = nums.length - 2; j >= 0; j--) {
    right[j] = right[j + 1] * nums[j + 1]
  }

  for (let k = 0; k < nums.length; k++) {
    result.push(left[k] * right[k])
  }

  console.log({ left, right })
  return result
}

export default { productExceptSelf1, productExceptSelf }
