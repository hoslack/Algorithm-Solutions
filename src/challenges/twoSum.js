const twoSum = (nums, target) => {
  let hash = new Map()
  for(let [index, num] of nums.entries()){
    if (hash.has(num)) return [hash.get(num), index];
    hash.set(target-num,index)
  }
}
export default twoSum
