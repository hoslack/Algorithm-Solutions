const twoSumSorted = (nums, target) => {
  //Strictly for sorted Arrays
  let [left, right] = [0, nums.length-1]
  while(left<right){
    let sum = nums[left]+nums[right]
    if(sum===target){
      return [left, right]
    }else if(sum>target) {
      right--
    }else {
      left++
    }
  }
  return [-1, -1]
}
export default twoSumSorted
