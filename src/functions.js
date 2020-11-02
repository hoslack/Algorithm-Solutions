export const singleNumber = (array) => {
  return array.reduce((a,b) => a^b)
}

export const majorityElement = (nums=[]) => {
  const hash = {}
  let keyName = 0
  let counter = 0

  for(let i=0; i<nums.length; i++ ){
    !hash[nums[i]] ? hash[nums[i]]=1 : hash[nums[i]]++

    if (hash[nums[i]]>counter){
      counter = hash[nums[i]]
      keyName = nums[i]
    }
  }
  return keyName
}

export const findDisappearedNumbers = (nums) => {
  const uniqueArray = [...new Set(nums.sort())]
  const completeArray = Array.from({length: nums.length}, (_, i) => i + 1)
  return completeArray.filter(x => !uniqueArray.includes(x));
}

export const subtractProductAndSum = (num) => {
  let numberArray = Array.from(String(num), Number);
  let [product, sum] = [1, 0]
  for(let number of numberArray){
    product = product *number
    sum = sum + number
  }
return product-sum
}

export const numberOfSteps = (num) => {
  let steps = 0
  while(num){
    num%2===0 ? num=num/2 : num--
    steps++
  }
return steps
}

export const twoSum = (nums, target) => {
  let hash = new Map()
  for(let [index, num] of nums.entries()){
    if (hash.has(num)) return [hash.get(num), index];
    hash.set(target-num,index)
  }
}
export const twoSumSorted = (nums, target) => {
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

export const numIslands = (grid) => {
  let islandCount = 0
  for(let row=0; row<grid.length; row++){
    for(let col=0; col<grid[row].length; col++){
      if (grid[row][col]==='1'){
        islandCount++
        grid[row][col]='0'
      }
    }
  }
  return islandCount
}

const addWater = (right, left, grid) => {

}
