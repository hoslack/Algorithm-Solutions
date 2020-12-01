// Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].
//
//     Example:
//
// Input:  [1,2,3,4]
// Output: [24,12,8,6]
// Constraint: It's guaranteed that the product of the elements of any prefix or suffix of the array (including the whole array) fits in a 32 bit integer.
//
// Note: Please solve it without division and in O(n).
//
//     Follow up:
//     Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)

const productExceptSelf = (nums: number[]): number[] => {
    let output: number[] = new Array(nums.length).fill(nums[0])
    let cacheVar = nums[nums.length-1]

    for(let i =1; i<nums.length; i++){
        output[i] = output[i-1]*nums[i]
    }
    output[nums.length-1] = output[output.length-2]
    for(let j = nums.length-2; j>0; j--){
        output[j] = output[j-1]*cacheVar
        cacheVar = cacheVar*nums[j]
    }
    output[0] = cacheVar

    return output
}

export default productExceptSelf
