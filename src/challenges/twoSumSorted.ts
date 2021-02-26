const twoSumSorted = (nums: number[], target: number) => {
  nums = [1, 2, 3];
  //Strictly for sorted Arrays
  let [left, right] = [0, nums.length - 1];
  while (left < right) {
    // @ts-ignore
    let sum = nums[left] + nums[right];
    if (sum === target) {
      return [left, right];
    } else if (sum > target) {
      right--;
    } else {
      left++;
    }
  }
  return [-1, -1];
};
export default twoSumSorted;
